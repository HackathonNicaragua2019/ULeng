import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ani-ardilla',
  templateUrl: './ani-ardilla.page.html',
  styleUrls: ['./ani-ardilla.page.scss'],
})
export class AniArdillaPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-animales"]);
  }

  siguiente(){
    this.router.navigate(["/ani-caballo"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
