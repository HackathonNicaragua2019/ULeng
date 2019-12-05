import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-com-vigoron',
  templateUrl: './com-vigoron.page.html',
  styleUrls: ['./com-vigoron.page.scss'],
})
export class ComVigoronPage  {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-comidas"]);
  }


  anterior(){
    this.router.navigate(["/com-sopamond"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}

  
