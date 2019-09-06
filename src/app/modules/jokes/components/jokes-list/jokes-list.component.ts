import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RootState } from 'src/app/app.types';

import { Joke } from '../../jokes.types';
import { LoadRandomJokes } from '../../state/jokes.actions';
import { selectRandomJokes } from '../../state/jokes.selectors';

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.scss']
})
export class JokesListComponent implements OnInit {
  randomJokes$: Observable<Joke[]>;

  constructor(private store: Store<RootState>) {
    this.randomJokes$ = store.select(selectRandomJokes);
  }

  ngOnInit() {
    this.fetchRandomJokes();
  }

  fetchRandomJokes() {
    this.store.dispatch(new LoadRandomJokes({ limit: 10 }));
  }
}
