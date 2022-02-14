import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { transactionReducer, TransactionState } from './transaction.reducer';


export interface State {
  transactions:TransactionState
}

export const reducers: ActionReducerMap<State> = {
  transactions:transactionReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
