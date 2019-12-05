import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-colores',
  templateUrl: './cat-colores.page.html',
  styleUrls: ['./cat-colores.page.scss'],
})
export class CatColoresPage {

  constructor(private router: Router) { }
  
  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  home(){
    this.router.navigate(["/home"]);
  }

}
