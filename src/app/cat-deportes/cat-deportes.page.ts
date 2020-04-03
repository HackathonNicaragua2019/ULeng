import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cat-deportes',
  templateUrl: './cat-deportes.page.html',
  styleUrls: ['./cat-deportes.page.scss'],
})
export class CatDeportesPage {

  constructor(private router: Router) { }
  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  home(){
    this.router.navigate(["/home"]);
  }

  goBaloncesto(){
    this.router.navigate(["/depo-baloncesto"]);
  }

  goBeisbol(){
    this.router.navigate(["/depo-beisbol"]);
  }

  goFutbol(){
    this.router.navigate(["/depo-futbol"]);
  }

  goNatacion(){
    this.router.navigate(["/depo-natacion"]);
  }

  goTenis(){
    this.router.navigate(["/depo-tenis"]);
  }

}
