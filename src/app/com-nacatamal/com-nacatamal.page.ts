import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-com-nacatamal',
  templateUrl: './com-nacatamal.page.html',
  styleUrls: ['./com-nacatamal.page.scss'],
})
export class ComNacatamalPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-comidas"]);
  }

  siguiente(){
    this.router.navigate(["/com-quesillo"]);
  }

  anterior(){
    this.router.navigate(["/com-indioviejo"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
  
