import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-beb-semjicaro',
  templateUrl: './beb-semjicaro.page.html',
  styleUrls: ['./beb-semjicaro.page.scss'],
})
export class BebSemjicaroPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-bebidas"]);
  }

  siguiente(){
    this.router.navigate(["/beb-tibio"]);
  }

  anterior(){
    this.router.navigate(["/beb-pozol"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
