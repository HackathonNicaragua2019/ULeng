import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-saludos',
  templateUrl: './cat-saludos.page.html',
  styleUrls: ['./cat-saludos.page.scss'],
})
export class CatSaludosPage {

  constructor(private router: Router) { }
  
  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  home(){
    this.router.navigate(["/home"]);
  }

}
