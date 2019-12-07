import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-emociones',
  templateUrl: './cat-emociones.page.html',
  styleUrls: ['./cat-emociones.page.scss'],
})
export class CatEmocionesPage {

  constructor(private router: Router) { }
  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  home(){
    this.router.navigate(["/home"]);
  }

}
