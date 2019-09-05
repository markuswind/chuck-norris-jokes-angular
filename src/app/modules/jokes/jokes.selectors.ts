import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RootState } from 'src/app/app.types';

import { FeatureState } from './jokes.types';
import { jokesFeatureKey } from './jokes.reducer';

export const selectFeature = createFeatureSelector<RootState, FeatureState>(
  jokesFeatureKey
);

export const selectRandomJokes = createSelector(
  selectFeature,
  (state: FeatureState) => state.randomJokes
);
