import { Component, OnInit } from '@angular/core';

import {  FormBuilder,  Validators ,FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product-rf',
  templateUrl: './add-product-rf.component.html',
  styleUrls: ['./add-product-rf.component.css']
})
export class AddProductRFComponent implements OnInit {

     reactiveForm = new FormGroup({
      idProduit: new FormControl('', Validators.required),
      code: new FormControl(''),
      libelle: new FormControl('', [Validators.required, Validators.minLength(3)]),
      prixUnitaire: new FormControl('', [Validators.required, Validators.pattern('^[1-9][0-9]*?')]),
      idDP: new FormControl('', Validators.required),
      DC: new FormControl('', Validators.required),
   DDM: new FormControl('', Validators.required)
});
  constructor() { }

  ngOnInit(): void {
  }

}
