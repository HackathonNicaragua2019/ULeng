import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-beb-jengibre',
  templateUrl: './beb-jengibre.page.html',
  styleUrls: ['./beb-jengibre.page.scss'],
})
export class BebJengibrePage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-bebidas"]);
  }

  siguiente(){
    this.router.navigate(["/beb-pinol"]);
  }

  anterior(){
    this.router.navigate(["/beb-chicha"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
