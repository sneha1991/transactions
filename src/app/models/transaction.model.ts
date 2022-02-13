export interface Transaction {
  cashflow: number;
  date: string;
  id: number;
  type: string;
  value: number;
  security?: string;
  shares?: number;
}

export interface Transac {
  transactions: Transaction[];
}



export enum Type {
  'buy',
  'sell',
  'deposit',
  'withdrawal',
}

// export function calculateBooksGrossEarnings(books: BookModel[]) {
//     return books.reduce((total, book) => {
//       return total + parseInt(`${book.earnings}`, 10) || 0;
//     }, 0);
//   }