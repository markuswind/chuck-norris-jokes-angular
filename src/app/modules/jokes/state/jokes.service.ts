import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoadRandomJokesPayload } from '../jokes.types';

@Injectable({
  providedIn: 'root' // FIXME: should be provided in 'feature' instead?
})
export class JokesService {
  private baseUrl = 'http://api.icndb.com/jokes';

  constructor(private httpClient: HttpClient) {}

  fetchRandomJokes(payload: LoadRandomJokesPayload) {
    let url = `${this.baseUrl}/random/${payload.limit}`;

    if (payload.categories && payload.categories.length) {
      url += `?limitTo=${payload.categories}`;
    }

    return this.httpClient.get(url);
  }
}
