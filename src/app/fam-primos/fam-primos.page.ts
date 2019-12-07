import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fam-primos',
  templateUrl: './fam-primos.page.html',
  styleUrls: ['./fam-primos.page.scss'],
})
export class FamPrimosPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-familia"]);
  }

  siguiente(){
    this.router.navigate(["/fam-tia"]);
  }

  anterior(){
    this.router.navigate(["/fam-papa"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
