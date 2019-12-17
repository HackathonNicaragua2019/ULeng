import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-animales',
  templateUrl: './cat-animales.page.html',
  styleUrls: ['./cat-animales.page.scss'],
})
export class CatAnimalesPage {

  constructor(private router: Router) { }
  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  home(){
    this.router.navigate(["/home"]);
  }

  goArdilla(){
    this.router.navigate(["/ani-ardilla"]);
  }

  goCaballo(){
    this.router.navigate(["/ani-caballo"]);
  }

  goCerdo(){
    this.router.navigate(["/ani-cerdo"]);
  }

  goConejo(){
    this.router.navigate(["/ani-conejo"]);
  }

  goGallina(){
    this.router.navigate(["/ani-gallina"]);
  }

  goGallo(){
    this.router.navigate(["/ani-gallo"]);
  }

  goGato(){
    this.router.navigate(["/ani-gato"]);
  }

  goMono(){
    this.router.navigate(["/ani-mono"]);
  }

  goPerro(){
    this.router.navigate(["/ani-perro"]);
  }

  goVaca(){
    this.router.navigate(["/ani-vaca"]);
  }

}
