import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TagInputComponent} from './form/tag-input/tag-input.component';
import {SelectComponent} from './form/select/select.component';
import {InputComponent} from './form/input/input.component';
import {TextareaComponent} from './form/textarea/textarea.component';
import {CheckboxComponent} from './form/checkbox/checkbox.component';
import {RadioComponent} from './form/radio/radio.component';
import {FileInputComponent} from './form/file-input/file-input.component';
import {KeypadComponent} from './form/keypad/keypad.component';
import {SliderComponent} from './form/slider/slider.component';
import {SpinnerComponent} from './form/spinner/spinner.component';
import {RatingComponent} from './form/rating/rating.component';
import {DateTimeComponent} from './form/date-time/date-time.component';
import {ContainerComponent} from './base/container/container.component';
import {NgMetro4Module} from 'ng-metro4';
import {GridComponent} from './base/grid/grid.component';
import {FormComponent} from './base/form/form.component';
import {ButtonComponent} from './base/button/button.component';
import {IconComponent} from './base/icon/icon.component';
import {GravatarComponent} from './controls/gravatar/gravatar.component';
import {DonutComponent} from './controls/donut/donut.component';
import {ProgressComponent} from './controls/progress/progress.component';
import {HintComponent} from './information/hint/hint.component';
import {ToastComponent} from './information/toast/toast.component';
import {NotifyComponent} from './information/notify/notify.component';
import {DialogComponent} from './information/dialog/dialog.component';
import {PopoverComponent} from './controls/popover/popover.component';
import {PanelComponent} from './controls/panel/panel.component';
import { HotkeyComponent } from './controls/hotkey/hotkey.component';
import { LoadingComponent } from './base/loading/loading.component';
import { LetComponent } from './base/let/let.component';

@NgModule({
  declarations: [
    AppComponent,
    TagInputComponent,
    SelectComponent,
    InputComponent,
    TextareaComponent,
    CheckboxComponent,
    RadioComponent,
    FileInputComponent,
    KeypadComponent,
    SliderComponent,
    SpinnerComponent,
    RatingComponent,
    DateTimeComponent,
    ContainerComponent,
    GridComponent,
    FormComponent,
    ButtonComponent,
    IconComponent,
    GravatarComponent,
    DonutComponent,
    ProgressComponent,
    HintComponent,
    ToastComponent,
    NotifyComponent,
    DialogComponent,
    PopoverComponent,
    PanelComponent,
    HotkeyComponent,
    LoadingComponent,
    LetComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgMetro4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
