import {ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {DefaultValueAccessor} from '../../helper/default-value-accessor';
import {ControlBase} from '../control-base';
import {TypeAlias} from '../../helper/type-alias';
import {asapScheduler} from 'rxjs';

declare var $: any;

@Component({
  selector: 'm4-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css'],
  providers: [DefaultValueAccessor.get(MaterialInputComponent), TypeAlias.get(MaterialInputComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaterialInputComponent extends ControlBase<string> {
  @Input('type') type = 'text';
  @Input('placeholder') placeholder = '';
  @Input('label') label: string;
  @Input('informer') informer: string;
  @Input('icon') icon: string;
  @Input('cls-line') clsLine: string;
  @Input('cls-label') clsLabel: string;
  @Input('cls-informer') clsInformer: string;
  @Input('cls-icon') clsIcon: string;

  @ViewChild('input', { static: true }) private input: ElementRef;
  private materialInput: any;
  private clonedElement: any;

  createControl() {
    return new Promise<void>((complete) => {
      const originalElement = $(this.input.nativeElement);
      originalElement.hide();

      if (this.clonedElement) {
        this.clonedElement.parent().remove();
      }

      this.clonedElement = originalElement.clone().show();
      originalElement.parent().append(this.clonedElement);

      this.materialInput = this.clonedElement.materialinput().data('materialinput');

      this.clonedElement.one('blur', () => {
        this.touchCallback();
      });

      this.clonedElement.on('keydown change', (event) => {
        asapScheduler.schedule(() => {
          let newValue = this.clonedElement.val();

          if (this.type === 'number') {
            newValue = +newValue;
          }

          this.changeValue(newValue);
        }, 1);
      });

      complete();
    });

  }

  disable(disabled: boolean): void {
    if (disabled) {
      this.materialInput.disable();
    } else {
      this.materialInput.enable();
    }
  }

  newValue(): void {
    if (!this.materialInput) {
      return;
    }

    this.clonedElement.val(this.innerValue);
  }

  newClassValue(newClasses: string[], oldClasses: string[]) {
    if (this.clonedElement) {
      const target = this.clonedElement.parent();

      oldClasses.forEach((cls: string) => {
        target.removeClass(cls);
      });

      newClasses.forEach((cls: string) => {
        target.addClass(cls);
      });
    }
  }

}
