import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ani-mono',
  templateUrl: './ani-mono.page.html',
  styleUrls: ['./ani-mono.page.scss'],
})
export class AniMonoPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-animales"]);
  }

  siguiente(){
    this.router.navigate(["/ani-perro"]);
  }

  anterior(){
    this.router.navigate(["/ani-gato"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
