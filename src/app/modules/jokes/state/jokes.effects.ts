import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import {
  ActionTypes,
  LoadRandomJokesError,
  LoadRandomJokesSuccess
} from './jokes.actions';

/*
 * EFFECTS
 */

@Injectable()
export class JokesEffects {
  constructor(private httpClient: HttpClient, private actions$: Actions) {}

  @Effect()
  loadRandomJokes$ = this.actions$.pipe(
    ofType(ActionTypes.LOAD_RANDOM_JOKES),
    switchMap(() =>
      // TODO: use payload limit + create service for the API calls?
      this.httpClient.get(`http://api.icndb.com/jokes/random/10`).pipe(
        map(
          (response: any) =>
            new LoadRandomJokesSuccess({ result: response.value })
        ),
        catchError((error: HttpErrorResponse) => {
          return of(
            new LoadRandomJokesError({
              code: error.status,
              message: error.message
            })
          );
        })
      )
    )
  );
}
