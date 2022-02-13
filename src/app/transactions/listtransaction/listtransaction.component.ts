import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/models/transaction.model';
import { deleteTransaction, loadTransactions } from '../Store/actions/transaction.actions';
import { State } from '../Store/reducers';
import { selectAll } from '../Store/reducers/transaction.reducer';
import { getTransactions } from '../Store/selector/transaction.selector';

@Component({
  selector: 'app-listtransaction',
  templateUrl: './listtransaction.component.html',
  styleUrls: ['./listtransaction.component.css']
})
export class ListtransactionComponent implements OnInit {
  transactions: Observable<Transaction[]> | undefined;
  total: number =0;
  constructor(private store: Store<State>,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.listTransactions();
  }

  listTransactions(){
    this.transactions = this.store.select(getTransactions);
    this.store.select(getTransactions).subscribe(res=>console.log("res",res))
    // this.transactionService.getTransactions().
    // subscribe(res=>{
    // this.transactions =res.transactions;
    // this.total= this.transactions.reduce((total: number, item: { cashflow: number }) => total + item.cashflow,0);
    console.log("test",this.total);
//})
  }
 editTransaction(id:number){
   this.router.navigate(['edit',id],{ relativeTo: this.route })
 }
 onDeleteTransaction(id: number) {
  if (confirm('Are you sure you want to delete')) {
    this.store.dispatch(deleteTransaction({ id }));
  }
}

}
