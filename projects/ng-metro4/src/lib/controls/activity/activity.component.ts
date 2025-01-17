import {ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ActivityStyleType, ActivityType} from '../../helper/types';
import {asapScheduler} from 'rxjs';

declare var $: any;

@Component({
  selector: 'm4-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityComponent implements OnInit, OnChanges {
  @Input() type: ActivityType;
  @Input('activity-style') activityStyle: ActivityStyleType;

  @ViewChild('activity', { static: true }) private activity: ElementRef;
  private clonedElement: any;

  constructor() { }

  private createControl() {
    asapScheduler.schedule(() => {
      const originalElement = $(this.activity.nativeElement);
      originalElement.hide();

      if (this.clonedElement) {
        this.clonedElement.remove();
      }

      this.clonedElement = originalElement.clone().show();
      originalElement.parent().append(this.clonedElement);

      this.clonedElement.activity();
    });
  }

  ngOnInit() {
    this.createControl();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.createControl();
  }

}
