export interface Joke {
  id: number;
  joke: string;
  categories: string[];
}

export interface FeatureState {
  randomJokes: Joke[];
}
