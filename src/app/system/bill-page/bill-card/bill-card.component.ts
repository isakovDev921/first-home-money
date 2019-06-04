import { Component, OnInit, Input } from '@angular/core';
import { Bill } from '../../shared/models/bill.model';

@Component({
  selector: 'wfm-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  @Input() bill: Bill;
  @Input() currency: any;
  
  constCurrency = 1;

  constructor() { }

  ngOnInit() {
    console.log(this.currency);
  }

}
