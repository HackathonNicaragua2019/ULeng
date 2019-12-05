import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-com-sopamond',
  templateUrl: './com-sopamond.page.html',
  styleUrls: ['./com-sopamond.page.scss'],
})
export class ComSopamondPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-comidas"]);
  }

  siguiente(){
    this.router.navigate(["/com-vigoron"]);
  }

  anterior(){
    this.router.navigate(["/com-rondon"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}