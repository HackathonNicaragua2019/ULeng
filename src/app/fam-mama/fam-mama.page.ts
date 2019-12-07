import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fam-mama',
  templateUrl: './fam-mama.page.html',
  styleUrls: ['./fam-mama.page.scss'],
})
export class FamMamaPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-familia"]);
  }

  siguiente(){
    this.router.navigate(["/fam-papa"]);
  }

  anterior(){
    this.router.navigate(["/fam-hijo"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
