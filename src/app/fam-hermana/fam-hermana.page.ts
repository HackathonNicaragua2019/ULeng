import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fam-hermana',
  templateUrl: './fam-hermana.page.html',
  styleUrls: ['./fam-hermana.page.scss'],
})
export class FamHermanaPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-familia"]);
  }

  siguiente(){
    this.router.navigate(["/fam-hermano"]);
  }

  anterior(){
    this.router.navigate(["/fam-abuelo"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
