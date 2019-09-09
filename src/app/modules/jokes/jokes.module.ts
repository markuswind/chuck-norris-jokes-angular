import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import { SharedModule } from '../shared/shared.module';

import { FavoriteJokesListComponent } from './components/favorite-jokes-list/favorite-jokes-list.component';
import { RandomJokesListComponent } from './components/random-jokes-list/random-jokes-list.component';
import { JokesPageComponent } from './pages/jokes/jokes.page';

import { JOKES_FEATURE_KEY } from './jokes.constants';
import { jokesReducer } from './state/jokes.reducer';
import { JokesService } from './state/jokes.service';
import { JokeDetailComponent } from './components/joke-detail/joke-detail.component';

/*
 * META REDUCERS
 */

function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: ['favoriteJokes'],
    rehydrate: true
  })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

/*
 * MODULE
 */

@NgModule({
  declarations: [
    JokesPageComponent,
    FavoriteJokesListComponent,
    RandomJokesListComponent,
    JokeDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forFeature(JOKES_FEATURE_KEY, jokesReducer, { metaReducers })
  ],
  providers: [JokesService],
  bootstrap: [JokesPageComponent]
})
export class JokesModule {}
