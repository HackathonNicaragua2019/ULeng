import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fam-tia',
  templateUrl: './fam-tia.page.html',
  styleUrls: ['./fam-tia.page.scss'],
})
export class FamTiaPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-familia"]);
  }

  siguiente(){
    this.router.navigate(["/fam-tio"]);
  }

  anterior(){
    this.router.navigate(["/fam-primos"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
