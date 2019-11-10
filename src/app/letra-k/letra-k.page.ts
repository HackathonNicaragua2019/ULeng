import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-letra-k',
  templateUrl: './letra-k.page.html',
  styleUrls: ['./letra-k.page.scss'],
})
export class LetraKPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-abecedario"]);
  }

  siguiente(){
    this.router.navigate(["/letra-l"]);
  }

  anterior(){
    this.router.navigate(["/letra-j"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
