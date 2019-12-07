import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emo-triste',
  templateUrl: './emo-triste.page.html',
  styleUrls: ['./emo-triste.page.scss'],
})
export class EmoTristePage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-emociones"]);
  }

  anterior(){
    this.router.navigate(["/emo-llorando"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
