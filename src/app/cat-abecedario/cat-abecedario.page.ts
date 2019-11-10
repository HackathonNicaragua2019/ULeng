import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-abecedario',
  templateUrl: './cat-abecedario.page.html',
  styleUrls: ['./cat-abecedario.page.scss'],
})
export class CatAbecedarioPage {

  constructor(private router: Router) { }
  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  home(){
    this.router.navigate(["/home"]);
  }

}
