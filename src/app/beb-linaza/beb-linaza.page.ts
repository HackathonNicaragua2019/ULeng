import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beb-linaza',
  templateUrl: './beb-linaza.page.html',
  styleUrls: ['./beb-linaza.page.scss'],
})
export class BebLinazaPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-bebidas"]);
  }

  siguiente(){
    this.router.navigate(["/beb-pinol"]);
  }

  anterior(){
    this.router.navigate(["/beb-jengibre"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}

