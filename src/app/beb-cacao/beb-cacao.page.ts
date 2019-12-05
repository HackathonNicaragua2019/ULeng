import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-beb-cacao',
  templateUrl: './beb-cacao.page.html',
  styleUrls: ['./beb-cacao.page.scss'],
})
export class BebCacaoPage  {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-bebidas"]);
  }

  siguiente(){
    this.router.navigate(["/beb-chia"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
