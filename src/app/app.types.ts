import { FeatureState as JokesFeatureState } from './modules/jokes/jokes.types';

export interface RootState {
  jokes: JokesFeatureState;
}
