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

  goAdios(){
    this.router.navigate(["/sal-adios"]);
  }

  goBuenasN(){
    this.router.navigate(["/sal-buenasnoches"]);
  }

  goBuenasT(){
    this.router.navigate(["/sal-buenastardes"]);
  }

  goBuenosD(){
    this.router.navigate(["/sal-buenosdias"]);
  }

  goComoE(){
    this.router.navigate(["/sal-comoestas"]);
  }

  goCompermiso(){
    this.router.navigate(["/sal-compermiso"]);
  }

  goDisculpa(){
    this.router.navigate(["/sal-disculpa"]);
  }

  goHastaP(){
    this.router.navigate(["/sal-hastapronto"]);
  }

  goHola(){
    this.router.navigate(["/sal-hola"]);
  }

  goPorFavor(){
    this.router.navigate(["/sal-porfavor"]);
  }

}
