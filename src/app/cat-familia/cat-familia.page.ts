import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-familia',
  templateUrl: './cat-familia.page.html',
  styleUrls: ['./cat-familia.page.scss'],
})
export class CatFamiliaPage {

  constructor(private router: Router) { }
  
  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  home(){
    this.router.navigate(["/home"]);
  }

}
