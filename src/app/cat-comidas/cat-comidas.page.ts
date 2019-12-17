import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-comidas',
  templateUrl: './cat-comidas.page.html',
  styleUrls: ['./cat-comidas.page.scss'],
})
export class CatComidasPage {

  constructor(private router: Router) { }
  
  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  home(){
    this.router.navigate(["/home"]);
  }

  goAsado(){
    this.router.navigate(["/com-asado"]);
  }

  goBaho(){
    this.router.navigate(["/com-baho"]);
  }

  goChancho(){
    this.router.navigate(["/com-chanyuca"]);
  }

  goGallo(){
    this.router.navigate(["/com-gallopinto"]);
  }

  goIndio(){
    this.router.navigate(["/com-indioviejo"]);
  }

  goNacatamal(){
    this.router.navigate(["/com-nacatamal"]);
  }

  goQuesillo(){
    this.router.navigate(["/com-quesillo"]);
  }

  goRondon(){
    this.router.navigate(["/com-rondon"]);
  }

  goGuirila(){
    this.router.navigate(["/com-sopamond"]);
  }

  goVigoron(){
    this.router.navigate(["/com-vigoron"]);
  }

}