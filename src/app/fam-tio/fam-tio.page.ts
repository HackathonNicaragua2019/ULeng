import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fam-tio',
  templateUrl: './fam-tio.page.html',
  styleUrls: ['./fam-tio.page.scss'],
})
export class FamTioPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-familia"]);
  }

  anterior(){
    this.router.navigate(["/fam-tia"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
