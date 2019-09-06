import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { JokesPageComponent } from './pages/jokes/jokes.page';
import { JokesListComponent } from './components/jokes-list/jokes-list.component';
import { jokesFeatureKey, jokesReducer } from './state/jokes.reducer';

@NgModule({
  declarations: [JokesPageComponent, JokesListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forFeature(jokesFeatureKey, jokesReducer)
  ],
  providers: [],
  bootstrap: [JokesPageComponent]
})
export class JokesModule {}
