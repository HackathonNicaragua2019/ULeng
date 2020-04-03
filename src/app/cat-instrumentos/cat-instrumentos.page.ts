import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cat-instrumentos',
  templateUrl: './cat-instrumentos.page.html',
  styleUrls: ['./cat-instrumentos.page.scss'],
})
export class CatInstrumentosPage {

  constructor(private router: Router) { }
  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  home(){
    this.router.navigate(["/home"]);
  }

  goAcordeon(){
    this.router.navigate(["/ins-acordeon"]);
  }

  goFlauta(){
    this.router.navigate(["/ins-flauta"]);
  }

  goGuitarra(){
    this.router.navigate(["/ins-guitarra"]);
  }

  goPiano(){
    this.router.navigate(["/ins-piano"]);
  }

  goViolin(){
    this.router.navigate(["/ins-violin"]);
  }

}
