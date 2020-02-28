import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage {

  constructor ( private router: Router, private menuCtrl: MenuController ) {}

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  home(){
    this.router.navigate(["/home"]);
  }

  goAbecedario(){
    this.router.navigate(["/cat-abecedario"]);
  }

  goAnimales(){
    this.router.navigate(["/cat-animales"]);
  }

  goBebidas(){
    this.router.navigate(["/cat-bebidas"]);
  }

  goColores(){
    this.router.navigate(["/cat-colores"]);
  }

  goComidas(){
    this.router.navigate(["/cat-comidas"]);
  }

  goDepartamentos(){
    this.router.navigate(["/cat-departamentos"]);
  }

  goEmociones(){
    this.router.navigate(["/cat-emociones"]);
  }

  goFamilia(){
    this.router.navigate(["/cat-familia"]);
  }

  goNumeros(){
    this.router.navigate(["/cat-numeros"]);
  }

  goSaludos(){
    this.router.navigate(["/cat-saludos"]);
  }

}
