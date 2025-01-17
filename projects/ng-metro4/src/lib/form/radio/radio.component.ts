import {ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ControlBase} from '../control-base';
import {DefaultValueAccessor} from '../../helper/default-value-accessor';
import {ObjectHelper} from '../../helper/object-helper';
import {TypeAlias} from '../../helper/type-alias';
import {asapScheduler} from 'rxjs';
import {PositionHorizontalType} from '../../helper/types';

declare var $: any;

@Component({
  selector: 'm4-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  providers: [DefaultValueAccessor.get(RadioComponent), TypeAlias.get(RadioComponent)],
  changeDetection: ChangeDetectionStrategy.Default
})
export class RadioComponent extends ControlBase<any> {
  @Input('name') name: string;
  @Input('value') value: any;

  @Input('style') style: 1|2;
  @Input('caption') caption: string;
  @Input('caption-position') captionPosition: PositionHorizontalType;

  @Input('cls-radio') clsRadio: string;
  @Input('cls-caption') clsCaption: string;
  @Input('cls-check') clsCheck: string;

  @ViewChild('input', { static: true }) private input: ElementRef;
  private clonedElement: any;
  private radio: any;

  createControl() {
    return new Promise<void>((complete) => {
      const originalElement = $(this.input.nativeElement);
      originalElement.hide();

      if (this.clonedElement) {
        this.clonedElement.parent().remove();
      }

      this.clonedElement = originalElement.clone().show();
      originalElement.parent().append(this.clonedElement);

      this.radio = this.clonedElement.radio().data('radio');

      this.clonedElement.one('blur', () => {
        this.touchCallback();
      });

      this.clonedElement.on('change', (event) => {
        this.changeCallback(this.value);
      });

      complete();
    });

  }

  disable(disabled: boolean): void {
    asapScheduler.schedule(() => {
      if (disabled) {
        this.clonedElement.parent().addClass('disabled');
        this.clonedElement.attr('disabled', '');
      } else {
        this.clonedElement.parent().removeClass('disabled');
        this.clonedElement.attr('disabled', null);
      }
    });
  }

  newValue(): void {
    if (!this.radio) {
      return;
    }

    if (ObjectHelper.compare(this.innerValue, this.value)) {
      this.clonedElement.prop('checked', true);
    } else {
      this.clonedElement.prop('checked', false);
    }
  }

  newClassValue(newClasses: string[], oldClasses: string[]) {
    asapScheduler.schedule(() => {
      if (this.clonedElement) {
        const target = this.clonedElement.parent();

        oldClasses.forEach((cls: string) => {
          target.removeClass(cls);
        });

        newClasses.forEach((cls: string) => {
          target.addClass(cls);
        });
      }
    });
  }

}
