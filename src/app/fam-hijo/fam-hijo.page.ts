import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fam-hijo',
  templateUrl: './fam-hijo.page.html',
  styleUrls: ['./fam-hijo.page.scss'],
})
export class FamHijoPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-familia"]);
  }

  siguiente(){
    this.router.navigate(["/fam-mama"]);
  }

  anterior(){
    this.router.navigate(["/fam-hija"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
