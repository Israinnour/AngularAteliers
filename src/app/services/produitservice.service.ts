import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from 'src/models/Produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitserviceService {
  url = "http://localhost:3000/produits";
  constructor(private http:HttpClient) { }

  addUser(produit:Produit){
    return this.http.post(this.url,produit);
  }
}
