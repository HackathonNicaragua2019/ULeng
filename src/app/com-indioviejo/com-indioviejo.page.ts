import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-com-indioviejo',
  templateUrl: './com-indioviejo.page.html',
  styleUrls: ['./com-indioviejo.page.scss'],
})
export class ComIndioviejoPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-comidas"]);
  }

  siguiente(){
    this.router.navigate(["/com-nacatamal"]);
  }

  anterior(){
    this.router.navigate(["/com-gallopinto"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}

  
