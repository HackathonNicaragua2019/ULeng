import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-beb-tibio',
  templateUrl: './beb-tibio.page.html',
  styleUrls: ['./beb-tibio.page.scss'],
})
export class BebTibioPage  {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-bebidas"]);
  }

  siguiente(){
    this.router.navigate(["/beb-tiste"]);
  }

  anterior(){
    this.router.navigate(["/beb-semjicaro"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}


  
