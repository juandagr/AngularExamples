import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCheckboxModule, MatIconModule} from '@angular/material';
 
import {MatCardModule} from '@angular/material/card';
import { UiTestCardComponent } from './ui-test-card/ui-test-card.component';
import {MatChipsModule} from '@angular/material/chips';
import { TestServicesComponent } from './test-services/test-services.component';

@NgModule({
  imports: [
  CommonModule,
  BrowserAnimationsModule,
  FlexLayoutModule,
  MatButtonModule, MatCheckboxModule,
  MatCardModule,
  MatChipsModule, 
  MatIconModule,
  ],
  declarations: [UiTestCardComponent, TestServicesComponent],
  exports: [UiTestCardComponent, TestServicesComponent]
})
export class TestModule { }
