import { Injectable } from '@angular/core';
import { Transaction } from '../../models/transaction.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const BASE_URL = environment.BASE_URL;
const HEADER = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

@Injectable({
  providedIn: 'root',
})


export class TransactionService {
  constructor(private http: HttpClient) {}
  
  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(BASE_URL);
  }

  updateTransaction(id: number, transaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(`${BASE_URL}/${id}`,{ transaction }, HEADER);
  }

  addTransaction(transaction: Transaction): Observable<Transaction>{
    console.log(transaction)
    return this.http.post<Transaction>(`${BASE_URL}`,{transaction},
    HEADER);
  }
  //delete the selected transaction
  deleteTransaction(id: number) {
    return this.http.delete(`${BASE_URL}/${id}`);
  }
}
