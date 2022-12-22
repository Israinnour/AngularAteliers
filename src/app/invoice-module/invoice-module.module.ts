import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesComponent } from './invoices/invoices.component';
import { FormInvoiceComponent } from './form-invoice/form-invoice.component';



@NgModule({
  declarations: [
    InvoicesComponent,
    FormInvoiceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InvoiceModuleModule { }
