import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ani-gallina',
  templateUrl: './ani-gallina.page.html',
  styleUrls: ['./ani-gallina.page.scss'],
})
export class AniGallinaPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-animales"]);
  }

  siguiente(){
    this.router.navigate(["/ani-gallo"]);
  }

  anterior(){
    this.router.navigate(["/ani-conejo"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}