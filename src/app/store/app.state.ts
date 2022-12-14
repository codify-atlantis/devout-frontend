import { createFeatureSelector } from '@ngrx/store';
import * as auth from './reducers/auth.reducers';

export interface AppState {
    authState: auth.State;
}

export const reducers = {
    auth: auth.AuthReducer,
};

export const selectAuthState = createFeatureSelector<AppState>('auth');