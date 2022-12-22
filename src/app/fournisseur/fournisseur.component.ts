import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  constructor() { }

hide!: boolean
  ngOnInit(): void {
  }
  Fournisseur = [
    {
      idFournisseur : 105,
      code : 'A104B89',
      libelle : 'MyTeck',
      hide : 'false'
    }
  ]
  cacher(){
       console.log(this.hide);
  }

}
