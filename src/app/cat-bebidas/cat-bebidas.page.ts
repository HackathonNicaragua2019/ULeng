import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-bebidas',
  templateUrl: './cat-bebidas.page.html',
  styleUrls: ['./cat-bebidas.page.scss'],
})
export class CatBebidasPage {

  constructor(private router: Router) { }
  
  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  home(){
    this.router.navigate(["/home"]);
  }

}
