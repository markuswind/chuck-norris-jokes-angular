import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import { JokesPageComponent } from './pages/jokes/jokes.page';
import { JokesListComponent } from './components/jokes-list/jokes-list.component';

import { jokesFeatureKey } from './jokes.constants';
import { jokesReducer } from './state/jokes.reducer';
import { JokesService } from './state/jokes.service';

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
  declarations: [JokesPageComponent, JokesListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forFeature(jokesFeatureKey, jokesReducer, { metaReducers })
  ],
  providers: [JokesService],
  bootstrap: [JokesPageComponent]
})
export class JokesModule {}
