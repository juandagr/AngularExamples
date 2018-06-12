import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { UiTestCardComponent } from './ui-test-card/ui-test-card.component';
import { TestServicesComponent } from './test-services/test-services.component';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TestCategoriesComponent } from './test-categories/test-categories.component';
import { TestCountriesComponent } from './test-countries/test-countries.component';
import { TestActorsComponent } from './test-actors/test-actors.component';
import { TestRoutingComponent } from './test-routing/test-routing.component';
import { TestMoviesComponent } from './test-movies/test-movies.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TestActorDetailComponent } from './test-actor-detail/test-actor-detail.component';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { TestTmdbMoviesComponent } from './test-tmdb-movies/test-tmdb-movies.component';
import { TestTmdbCreditsComponent } from './test-tmdb-credits/test-tmdb-credits.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule, MatCheckboxModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatSidenavModule,
    RouterModule.forRoot([
      {
        path:'categories',
        component: TestCategoriesComponent
      },
      {
        path: 'countries',
        component: TestCountriesComponent
      },
      {
        path: 'actors',
        component: TestActorsComponent
      },
      {
        path: 'movies',
        component: TestMoviesComponent
      },

      {
        path: 'actor/:id',
        component: TestActorDetailComponent
      },

      {
        path: 'tmdb/movies',
        component: TestTmdbMoviesComponent
      },

      {
        path: 'tmdb/credits/:idMovie',
        component: TestTmdbCreditsComponent
      },
    ])
  ],
  declarations: [UiTestCardComponent, TestServicesComponent, TestCategoriesComponent, TestCountriesComponent, TestActorsComponent, TestRoutingComponent, TestMoviesComponent, TestActorDetailComponent, TestTmdbMoviesComponent, TestTmdbCreditsComponent],
  exports: [UiTestCardComponent, TestServicesComponent, TestCategoriesComponent, TestCountriesComponent, TestActorsComponent, TestRoutingComponent, TestMoviesComponent, TestActorDetailComponent, TestTmdbMoviesComponent, TestTmdbCreditsComponent]
})
export class TestModule { }