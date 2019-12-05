import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-beb-pinol',
  templateUrl: './beb-pinol.page.html',
  styleUrls: ['./beb-pinol.page.scss'],
})
export class BebPinolPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-bebidas"]);
  }

  siguiente(){
    this.router.navigate(["/beb-pinolillo"]);
  }

  anterior(){
    this.router.navigate(["/beb-jengibre"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
