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

  goAmistoso(){
    this.router.navigate(["/emo-amistoso"]);
  }

  goCansado(){
    this.router.navigate(["/emo-cansado"]);
  }

  goConfundido(){
    this.router.navigate(["/emo-confundido"]);
  }

  goConmocionado(){
    this.router.navigate(["/emo-conmocionado"]);
  }

  goEnamorado(){
    this.router.navigate(["/emo-enamorado"]);
  }

  goEnojado(){
    this.router.navigate(["/emo-enojado"]);
  }

  goFeliz(){
    this.router.navigate(["/emo-feliz"]);
  }

  goLlorando(){
    this.router.navigate(["/emo-llorando"]);
  }

  goTriste(){
    this.router.navigate(["/emo-triste"]);
  }

}
