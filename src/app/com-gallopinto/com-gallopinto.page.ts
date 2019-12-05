import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-com-gallopinto',
  templateUrl: './com-gallopinto.page.html',
  styleUrls: ['./com-gallopinto.page.scss'],
})
export class ComGallopintoPage  {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-comidas"]);
  }

  siguiente(){
    this.router.navigate(["/com-indioviejo"]);
  }

  anterior(){
    this.router.navigate(["/com-chanyuca"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}

  
