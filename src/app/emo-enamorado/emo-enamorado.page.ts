import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emo-enamorado',
  templateUrl: './emo-enamorado.page.html',
  styleUrls: ['./emo-enamorado.page.scss'],
})
export class EmoEnamoradoPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-emociones"]);
  }

  siguiente(){
    this.router.navigate(["/emo-enojado"]);
  }

  anterior(){
    this.router.navigate(["/emo-conmocionado"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
