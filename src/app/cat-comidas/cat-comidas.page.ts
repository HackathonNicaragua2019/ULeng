import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-comidas',
  templateUrl: './cat-comidas.page.html',
  styleUrls: ['./cat-comidas.page.scss'],
})
export class CatComidasPage {

  constructor(private router: Router) { }
  
  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  home(){
    this.router.navigate(["/home"]);
  }

}