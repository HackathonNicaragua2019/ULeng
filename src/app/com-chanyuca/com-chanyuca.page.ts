import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-com-chanyuca',
  templateUrl: './com-chanyuca.page.html',
  styleUrls: ['./com-chanyuca.page.scss'],
})
export class ComChanyucaPage {


  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-comidas"]);
  }

  siguiente(){
    this.router.navigate(["/com-gallopinto"]);
  }

  anterior(){
    this.router.navigate(["/com-asado"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
