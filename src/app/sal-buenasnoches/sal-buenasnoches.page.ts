import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sal-buenasnoches',
  templateUrl: './sal-buenasnoches.page.html',
  styleUrls: ['./sal-buenasnoches.page.scss'],
})
export class SalBuenasnochesPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-saludos"]);
  }

  siguiente(){
    this.router.navigate(["/sal-buenastardes"]);
  }

  anterior(){
    this.router.navigate(["/sal-adios"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }
}
