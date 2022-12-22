import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductRFComponent } from './add-product-rf/add-product-rf.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';

const routes: Routes = [
  {path: "fournisseur" , component: FournisseurComponent},
  {path : "listF" , component: ListFournisseurComponent},
  {path : "listProduit" , component: ListProduitComponent},
  {path : "mainInvoice" , component: MainInvoiceComponent},
  {path : "Invoice/:id/:active" , component: InvoiceComponent},
  {path : "add" , component: AddProductRFComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
