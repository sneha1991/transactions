import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { ListtransactionComponent } from './listtransaction/listtransaction.component';
import { EdittransactionComponent } from './edittransaction/edittransaction.component';
import { AddtransactionComponent } from './addtransaction/addtransaction.component';
import { HttpClientModule } from '@angular/common/http';
import { TransactionService } from './services/transaction.service';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { TransactionEffects } from './Store/effects/transaction.effects';

@NgModule({
  declarations: [
    TransactionsComponent,
    ListtransactionComponent,
    EdittransactionComponent,
    AddtransactionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TransactionsRoutingModule,
    EffectsModule.forFeature([TransactionEffects])
  ],
  providers: [TransactionService],
})
export class TransactionsModule { }
