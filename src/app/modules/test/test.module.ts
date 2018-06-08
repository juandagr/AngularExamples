import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCheckboxModule, MatIconModule} from '@angular/material';
 
import {MatCardModule} from '@angular/material/card';
import { UiTestCardComponent } from './ui-test-card/ui-test-card.component';
import {MatChipsModule} from '@angular/material/chips';
import { TestServicesComponent } from './test-services/test-services.component';
import { RouterModule } from '@angular/router';
import { TestCategoriesComponent } from './test-categories/test-categories.component';
import { TestCountriesComponent } from './test-countries/test-countries.component';
import { TestActorDetailComponent } from './test-actor-detail/test-actor-detail.component';
import { TestActorsComponent } from './test-actors/test-actors.component';
import { TestMoviesComponent } from './test-movies/test-movies.component';
import { TestRoutingComponent } from './test-routing/test-routing.component';

@NgModule({
  imports: [
  CommonModule,
  BrowserAnimationsModule,
  FlexLayoutModule,
  MatButtonModule, MatCheckboxModule,
  MatCardModule,
  MatChipsModule, 
  MatIconModule,
  RouterModule.forRoot([
    {
      path:'categories',
      component: TestCategoriesComponent

    },
    {
      path:'categories',
      component: TestCountriesComponent
    }])
  ],
  declarations: [UiTestCardComponent, TestServicesComponent, TestCategoriesComponent, TestActorDetailComponent, TestActorsComponent, TestMoviesComponent, TestRoutingComponent]],
  exports: [UiTestCardComponent, TestServicesComponent, TestCategoriesComponent, TestActorDetailComponent, TestActorsComponent, TestMoviesComponent, TestRoutingComponent]
})
export class TestModule { }
