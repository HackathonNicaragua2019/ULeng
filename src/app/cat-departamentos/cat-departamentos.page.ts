import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-departamentos',
  templateUrl: './cat-departamentos.page.html',
  styleUrls: ['./cat-departamentos.page.scss'],
})
export class CatDepartamentosPage {

  constructor(private router: Router) { }
  
  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  home(){
    this.router.navigate(["/home"]);
  }

}