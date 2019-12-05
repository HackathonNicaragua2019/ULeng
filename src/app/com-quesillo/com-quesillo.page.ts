import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-com-quesillo',
  templateUrl: './com-quesillo.page.html',
  styleUrls: ['./com-quesillo.page.scss'],
})
export class ComQuesilloPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-comidas"]);
  }

  siguiente(){
    this.router.navigate(["/com-rondon"]);
  }

  anterior(){
    this.router.navigate(["/com-nacatamal"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
  
