import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ani-caballo',
  templateUrl: './ani-caballo.page.html',
  styleUrls: ['./ani-caballo.page.scss'],
})
export class AniCaballoPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-animales"]);
  }

  siguiente(){
    this.router.navigate(["/ani-cerdo"]);
  }

  anterior(){
    this.router.navigate(["/ani-ardilla"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
