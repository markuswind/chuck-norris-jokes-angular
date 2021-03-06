import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { JokesService } from '../jokes.service';
import {
  addFavoriteJoke,
  addRandomFavoriteJoke,
  loadRandomJokes,
  loadRandomJokesError,
  loadRandomJokesSuccess
} from './jokes.actions';

/*
 * EFFECTS
 */

@Injectable()
export class JokesEffects {
  constructor(private actions$: Actions, private jokesService: JokesService) {}

  @Effect()
  loadRandomJokes$ = this.actions$.pipe(
    ofType(loadRandomJokes),
    switchMap(payload =>
      this.jokesService.fetchRandomJokes(payload).pipe(
        map(response => loadRandomJokesSuccess({ result: response.value })),
        catchError((error: HttpErrorResponse) =>
          of(
            loadRandomJokesError({
              code: error.status,
              message: error.message
            })
          )
        )
      )
    )
  );

  @Effect()
  addRandomFavoriteJoke$ = this.actions$.pipe(
    ofType(addRandomFavoriteJoke),
    switchMap(() =>
      this.jokesService
        .fetchRandomJokes({ limit: 1 })
        .pipe(map(response => addFavoriteJoke({ joke: response.value[0] })))
    )
  );
}
