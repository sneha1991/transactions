import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { concatMap, exhaustMap, map, mergeMap, switchMap } from 'rxjs';
import { Transaction } from '../../../models/transaction.model';
import { TransactionService } from '../../services/transaction.service';
import * as TransactionActions from '../actions/transaction.actions';

@Injectable()
export class TransactionEffects {



  constructor(private transactionService: TransactionService,private actions$: Actions) {}




  loadTransactions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionActions.loadTransactions),
      exhaustMap(() =>
       this.transactionService
          .getTransactions()
          .pipe(map((transactions:Transaction[]) => TransactionActions.loadTransactionsSuccess({ transactions })))
      )
    )
  );

  addTransaction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionActions.addTransaction),
      concatMap((action) =>
        this.transactionService
          .addTransaction(action.transaction)
          .pipe(map((transaction) => TransactionActions.addTransactionSucess({ transaction })))
      )
    )
  );

  updateTransaction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionActions.updateTransaction),
      concatMap((action) =>
        this.transactionService
          .updateTransaction(action.id, action.changes)
          .pipe(map((transaction :Transaction) => 
          TransactionActions.updateTransactionSuccess({ transaction })))
      )
    )
  );




  deleteTransaction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionActions.deleteTransaction),
      mergeMap((action) =>
        this.transactionService
          .deleteTransaction(action.id)
          .pipe(
            map(() => TransactionActions.deleteTransactionSucess())
          )
      )
    )
  );
}
