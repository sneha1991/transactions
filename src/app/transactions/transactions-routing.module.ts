import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtransactionComponent } from './addtransaction/addtransaction.component';
import { ListtransactionComponent } from './listtransaction/listtransaction.component';
import { TransactionsComponent } from './transactions.component';

const routes: Routes = [
  { path: '', component: TransactionsComponent,
  children:[
  { path: '', component: ListtransactionComponent },
  { path: 'edit/:id', component: AddtransactionComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
