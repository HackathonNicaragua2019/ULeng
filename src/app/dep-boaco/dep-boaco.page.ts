import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dep-boaco',
  templateUrl: './dep-boaco.page.html',
  styleUrls: ['./dep-boaco.page.scss'],
})
export class DepBoacoPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-departamentos"]);
  }

  siguiente(){
    this.router.navigate(["/dep-carazo"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
