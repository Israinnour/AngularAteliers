import { Component, OnInit } from '@angular/core';
import { InvoceServiceService } from '../services/invoce-service.service';

@Component({
  selector: 'app-main-invoice',
  templateUrl: './main-invoice.component.html',
  styleUrls: ['./main-invoice.component.css']
})
export class MainInvoiceComponent implements OnInit {

  constructor(private servI : InvoceServiceService) { }

  ngOnInit(): void {
  }

}
