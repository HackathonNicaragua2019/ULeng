import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

  @Component({
    selector: 'app-com-asado',
    templateUrl: './com-asado.page.html',
    styleUrls: ['./com-asado.page.scss'],
  })
 
  export class ComAsadoPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-comidas"]);
  }

  siguiente(){
    this.router.navigate(["/com-chanyuca"]);
  }

  anterior(){
    this.router.navigate(["/com-baho"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}



  

