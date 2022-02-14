import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Transaction } from '../../../models/transaction.model';
import * as TransactionActions from '../actions/transaction.actions';



export const transactionsFeatureKey = 'transactions';

export interface TransactionState extends EntityState<Transaction> {
  // additional entities state properties
}

export const transactionAdapter: EntityAdapter<Transaction> = createEntityAdapter<Transaction>();

export const initialState: TransactionState = transactionAdapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState, 
  on(TransactionActions.addTransaction,
    (state, action) => transactionAdapter.addOne(action.transaction, state)
  ), 
  on(TransactionActions.updateTransaction,
    (state, action) => transactionAdapter.updateOne( { id: action.id, changes: action.changes }, state)
  ),
  
  on(TransactionActions.deleteTransaction,
    (state, action) => transactionAdapter.removeOne(action.id, state)
  ),
  on(TransactionActions.deleteTransactionSucess,
    (state, action) => transactionAdapter.removeOne(action.type, state)
  ),
  
  // on(TransactionActions.loadTransactions,
  //   (state, action) => transactionAdapter.setAll(action.transactions, state)
  // ),
  
  on(TransactionActions.loadTransactionsSuccess,
    (state, action) => transactionAdapter.setAll(action.transactions, state)
  ),
  
);
export function transactionReducer(state: TransactionState | undefined, action: Action) {
  return reducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = transactionAdapter.getSelectors();


