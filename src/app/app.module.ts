import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { HttpClientModule } from '@angular/common/http';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { HeaderComponent } from './header/header.component';
import { AddProductRFComponent } from './add-product-rf/add-product-rf.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FournisseurComponent,
    ListFournisseurComponent,
    ListProduitComponent,
    MainInvoiceComponent,
    InvoiceListComponent,
    InvoiceComponent,
    HeaderComponent,
    AddProductRFComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
