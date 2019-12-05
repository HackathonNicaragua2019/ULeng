import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-beb-pinolillo',
  templateUrl: './beb-pinolillo.page.html',
  styleUrls: ['./beb-pinolillo.page.scss'],
})
export class BebPinolilloPage  {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-bebidas"]);
  }

  siguiente(){
    this.router.navigate(["/beb-pozol"]);
  }

  anterior(){
    this.router.navigate(["/beb-pinol"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}


