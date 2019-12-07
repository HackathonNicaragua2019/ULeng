import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fam-abuelo',
  templateUrl: './fam-abuelo.page.html',
  styleUrls: ['./fam-abuelo.page.scss'],
})
export class FamAbueloPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-familia"]);
  }

  siguiente(){
    this.router.navigate(["/fam-hermana"]);
  }

  anterior(){
    this.router.navigate(["/fam-abuela"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
