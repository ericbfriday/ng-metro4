import 'linq4js';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgMetro4FormsModule} from './form/ng-metro4-forms.module';
import {NgMetro4BaseModule} from './base/ng-metro4-base.module';
import {NgMetro4ControlsModule} from './controls/ng-metro4-controls.module';
import {NgMetro4InformationModule} from './information/ng-metro4-information.module';

const imports = [
  NgMetro4BaseModule,
  NgMetro4FormsModule,
  NgMetro4ControlsModule,
  NgMetro4InformationModule
];

@NgModule({
  imports: [
    CommonModule,
    ...imports
  ],
  declarations: [

  ],
  exports: [
    ...imports
  ]
})
export class NgMetro4Module {
}
