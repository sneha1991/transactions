import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import {Transac, Transaction} from '../../models/transaction.model';
import { TransactionService } from '../services/transaction.service';
import { addTransaction } from '../Store/actions/transaction.actions';
import { State } from '../Store/reducers';


@Component({
  selector: 'app-addtransaction',
  templateUrl: './addtransaction.component.html',
  styleUrls: ['./addtransaction.component.css']
})
export class AddtransactionComponent implements OnInit {
  public typeValue:string | undefined;
  
  constructor(private transactionService:TransactionService,private store: Store<State>) { }

  ngOnInit(): void {
    this.typeValue =='null';
  }
  onSubmit(f:Transaction){
    console.log(f);
  const transaction = {
     "value": f.value,
     "type": f.type, 
     "date" : new Date(f.date).toISOString(),
     "id": f.id,
     "cashflow": f.cashflow,
     "security": f.security,
     "shares": f.shares
    
  };

  this.store.dispatch(addTransaction({ transaction }));
  }
}
