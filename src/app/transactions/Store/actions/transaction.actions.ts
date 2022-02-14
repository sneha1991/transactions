import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Transac, Transaction } from '../../../models/transaction.model';

export const loadTransactions = createAction(
  '[Transaction/API] Load Transactions', 
);
export const loadTransactionsSuccess = createAction(
  '[Transaction/API] Load Transactions Sucess',
  props<{ transactions: Transaction[] }>()
);

export const addTransaction = createAction(
  '[Transaction/API] Add Transaction',
  props<{ transaction: Transaction }>()
);
export const addTransactionSucess = createAction(
  '[Transaction/API] Add Transaction Sucess',
  props<{ transaction: Transaction }>()
);

export const updateTransaction = createAction(
  '[Transaction/API] Update Transaction',
  props<{ id: number; changes: Transaction }>()
);

export const updateTransactionSuccess = createAction(
  '[Transaction/API] Update Transaction Sucess',
  props<{ transaction: Transaction }>()
);

export const deleteTransaction = createAction(
  '[Transaction/API] Delete Transaction',
  props<{ id: number }>()
);
export const deleteTransactionSucess = createAction(
  '[Transaction/API] Delete Transaction Sucess'
);



