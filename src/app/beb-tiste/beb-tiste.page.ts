import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-beb-tiste',
  templateUrl: './beb-tiste.page.html',
  styleUrls: ['./beb-tiste.page.scss'],
})
export class BebTistePage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-bebidas"]);
  }

  anterior(){
    this.router.navigate(["/beb-tibio"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}

