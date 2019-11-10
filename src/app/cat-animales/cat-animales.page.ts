import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-animales',
  templateUrl: './cat-animales.page.html',
  styleUrls: ['./cat-animales.page.scss'],
})
export class CatAnimalesPage {

  constructor(private router: Router) { }
  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  home(){
    this.router.navigate(["/home"]);
  }

}
