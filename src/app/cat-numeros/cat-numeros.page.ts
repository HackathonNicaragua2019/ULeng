import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-numeros',
  templateUrl: './cat-numeros.page.html',
  styleUrls: ['./cat-numeros.page.scss'],
})
export class CatNumerosPage {

  constructor(private router: Router) { }
  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  home(){
    this.router.navigate(["/home"]);
  }

}
