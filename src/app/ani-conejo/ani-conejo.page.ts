import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ani-conejo',
  templateUrl: './ani-conejo.page.html',
  styleUrls: ['./ani-conejo.page.scss'],
})
export class AniConejoPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-animales"]);
  }

  siguiente(){
    this.router.navigate(["/ani-gallina"]);
  }

  anterior(){
    this.router.navigate(["/ani-cerdo"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
