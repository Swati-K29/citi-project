import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {Transaction} from "src/app/models/transaction";
import {TransactionService} from "src/app/services/transaction.service";

//let transactions:Transaction[]=[{transactionRef:"123wer",valueDate:"12-09-2020", payerName:"abcd", payerAccount:"DB", payeeName:"qwerty", payeeAccount:"hdfc",amount:123456,status:"vp"}];

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class TablesComponent implements OnInit {
  /*transactions:MatTableDataSource<Transaction>;
  displayedColumns: string[]=["transactionRef","valueDate","payerName","payerAccount","payeeName","payeeAccount","amount","status"];*/
  constructor(private transactionService:TransactionService) { }

  ngOnInit() {
   
  }
  }

  

