import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from 'src/models/invoicee';

@Injectable({
  providedIn: 'root'
})
export class InvoceServiceService {
  url :string="/api/invoices";
  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<Invoice[]>(this.url);
  }

  getById(id: Number){
    return this.http.get<Invoice>(this.url+'/'+id);
  }

  add(invoice:Invoice){
    return this.http.post(this.url,invoice);
  }

  delete(id:Number){
    return this.http.delete(this.url+'/'+id);
  }

  update(id:Number,invoice:Invoice){
    return this.http.put<Invoice>(this.url+'/'+id, invoice);
  }
}
