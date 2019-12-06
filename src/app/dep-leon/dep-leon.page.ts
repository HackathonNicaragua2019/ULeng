import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dep-leon',
  templateUrl: './dep-leon.page.html',
  styleUrls: ['./dep-leon.page.scss'],
})
export class DepLeonPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-departamentos"]);
  }

  siguiente(){
    this.router.navigate(["/dep-madriz"]);
  }

  anterior(){
    this.router.navigate(["/dep-jinotega"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
