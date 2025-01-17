import {ControlValueAccessor} from '@angular/forms';
import {
  AfterViewInit,
  ChangeDetectorRef,
  ElementRef,
  EventEmitter,
  OnChanges,
  OnDestroy,
  Optional,
  Output, SimpleChange,
  SimpleChanges
} from '@angular/core';
import {ObjectHelper} from '../helper/object-helper';
import {asapScheduler} from 'rxjs';
import {AttributeHelper} from '../helper/attribute-helper';

export abstract class ControlBase<T> implements ControlValueAccessor, AfterViewInit, OnChanges, OnDestroy {
  private classObserver: MutationObserver;

  public innerValue: T;
  public disableUpdate = false;

  public touchCallback: () => void = () => {};
  public changeCallback: (currentValue: T) => void = (_) => {};

  constructor(@Optional() public mainElement: ElementRef, private cdRef: ChangeDetectorRef) {}

  private observeClassValue() {
    this.classObserver = AttributeHelper.createObserver(this.mainElement, (newClasses, oldClasses) => {
      this.newClassValue(newClasses, oldClasses);
    });
  }

  public abstract newClassValue(newClasses: string[], oldClasses: string[]);

  public changeValue(newValue: T, callback: boolean = true) {
    if (this.disableUpdate) {
      return;
    }

    if (ObjectHelper.compare(newValue, this.innerValue)) {
      return;
    }

    this.innerValue = newValue;

    if (callback) {
      this.changeCallback(this.innerValue);
    }
  }

  registerOnChange(fn: (v: T) => void): void {
    this.changeCallback = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.touchCallback = fn;
  }

  public abstract disable(disabled: boolean);

  setDisabledState(isDisabled: boolean): void {
    this.disable(isDisabled);
  }

  public abstract newValue();

  callNewValue() {
    this.disableUpdate = true;
    this.newValue();
    this.disableUpdate = false;
  }

  writeValue(newValue: T): void {
    this.innerValue = newValue;
    this.callNewValue();
  }

  public abstract createControl(): Promise<void>;

  ngAfterViewInit() {
    this.createControl().then(() => {
      this.callNewValue();
      this.observeClassValue();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    asapScheduler.schedule(() => {
      this.createControl().then(() => {
        this.callNewValue();
      });
    });
  }

  ngOnDestroy(): void {
    if (this.classObserver) {
      this.classObserver.disconnect();
    }
  }

  updateProperty(key: keyof this, newValue: any) {
    const oldValue = this[key];

    if (oldValue !== newValue) {
      this[key] = newValue;

      if (this.cdRef) {
        this.cdRef.detectChanges();
      }

      const changes: SimpleChanges = {};
      changes[key as string] = { previousValue: oldValue, currentValue: newValue, firstChange: false } as SimpleChange;
      this.ngOnChanges(changes);
    }
  }
}
