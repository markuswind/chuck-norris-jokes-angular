import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { JokesPageComponent } from './pages/jokes/jokes.page';
import { JokesListComponent } from './components/jokes-list/jokes-list.component';

import { jokesFeatureKey } from './jokes.constants';
import { jokesReducer } from './state/jokes.reducer';
import { JokesService } from './state/jokes.service';

@NgModule({
  declarations: [JokesPageComponent, JokesListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forFeature(jokesFeatureKey, jokesReducer)
  ],
  providers: [JokesService],
  bootstrap: [JokesPageComponent]
})
export class JokesModule {}
