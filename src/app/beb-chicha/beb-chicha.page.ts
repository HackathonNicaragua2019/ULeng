import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beb-chicha',
  templateUrl: './beb-chicha.page.html',
  styleUrls: ['./beb-chicha.page.scss'],
})
export class BebChichaPage {
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-bebidas"]);
  }

  siguiente(){
    this.router.navigate(["/beb-jengibre"]);
  }

  anterior(){
    this.router.navigate(["/beb-chia"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}

