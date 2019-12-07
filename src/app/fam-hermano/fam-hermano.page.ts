import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fam-hermano',
  templateUrl: './fam-hermano.page.html',
  styleUrls: ['./fam-hermano.page.scss'],
})
export class FamHermanoPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-familia"]);
  }

  siguiente(){
    this.router.navigate(["/fam-hija"]);
  }

  anterior(){
    this.router.navigate(["/fam-hermana"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
