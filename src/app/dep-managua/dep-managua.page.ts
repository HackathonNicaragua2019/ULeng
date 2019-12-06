import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dep-managua',
  templateUrl: './dep-managua.page.html',
  styleUrls: ['./dep-managua.page.scss'],
})
export class DepManaguaPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-departamentos"]);
  }

  siguiente(){
    this.router.navigate(["/dep-masaya"]);
  }

  anterior(){
    this.router.navigate(["/dep-madriz"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
