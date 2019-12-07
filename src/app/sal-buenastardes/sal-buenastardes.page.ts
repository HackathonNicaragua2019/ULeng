import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sal-buenastardes',
  templateUrl: './sal-buenastardes.page.html',
  styleUrls: ['./sal-buenastardes.page.scss'],
})
export class SalBuenastardesPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-saludos"]);
  }

  siguiente(){
    this.router.navigate(["/sal-buenosdias"]);
  }

  anterior(){
    this.router.navigate(["/sal-buenasnoches"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }
}
