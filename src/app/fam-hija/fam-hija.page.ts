import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fam-hija',
  templateUrl: './fam-hija.page.html',
  styleUrls: ['./fam-hija.page.scss'],
})
export class FamHijaPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-familia"]);
  }

  siguiente(){
    this.router.navigate(["/fam-hijo"]);
  }

  anterior(){
    this.router.navigate(["/fam-hermano"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
