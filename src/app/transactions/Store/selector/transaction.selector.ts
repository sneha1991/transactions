import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "../reducers";
import { transactionAdapter, TransactionState } from "../reducers/transaction.reducer";

const getPostsState = createFeatureSelector<TransactionState>('transactions');
export const transactionSelectors = transactionAdapter.getSelectors();

export const getTransactions = createSelector(getPostsState, transactionSelectors.selectAll);
// export const getPostEntities = createSelector(
//   getPostsState,
//   transactionSelectors.selectEntities
// );



