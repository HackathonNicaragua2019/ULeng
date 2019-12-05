import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-com-rondon',
  templateUrl: './com-rondon.page.html',
  styleUrls: ['./com-rondon.page.scss'],
})
export class ComRondonPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-comidas"]);
  }

  siguiente(){
    this.router.navigate(["/com-sopamond"]);
  }

  anterior(){
    this.router.navigate(["/com-quesillo"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
