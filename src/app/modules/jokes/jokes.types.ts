/*
 * MODELS
 */

export interface Joke {
  id: number;
  joke: string;
  categories: string[];
}

/*
 * PAYLOADS
 */

export interface LoadRandomJokesPayload {
  categories?: ReadonlyArray<string>;
  limit: number;
}

export interface LoadRandomJokesSuccessPayload {
  result: Joke[];
}

export interface LoadErrorPayload {
  code: number;
  message: string;
}

/*
 * STATE
 */

export interface FeatureState {
  loading: boolean;
  error: boolean;
  randomJokes: Joke[];
}
