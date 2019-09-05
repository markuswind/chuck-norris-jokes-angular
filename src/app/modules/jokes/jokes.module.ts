import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { JokesPageComponent } from './pages/jokes/jokes.page';
import { JokesListComponent } from './components/jokes-list/jokes-list.component';
import { jokesFeatureKey, jokesReducer } from './jokes.reducer';

@NgModule({
  declarations: [JokesPageComponent, JokesListComponent],
  imports: [
    BrowserModule,
    StoreModule.forFeature(jokesFeatureKey, jokesReducer)
  ],
  providers: [],
  bootstrap: [JokesPageComponent]
})
export class JokesModule {}
