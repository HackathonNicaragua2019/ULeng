import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-beb-pozol',
  templateUrl: './beb-pozol.page.html',
  styleUrls: ['./beb-pozol.page.scss'],
})
export class BebPozolPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-bebidas"]);
  }

  siguiente(){
    this.router.navigate(["/beb-semjicaro"]);
  }

  anterior(){
    this.router.navigate(["/beb-pinolillo"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}

