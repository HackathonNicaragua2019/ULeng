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

  goAbuela(){
    this.router.navigate(["/fam-abuela"]);
  }

  goAbuelo(){
    this.router.navigate(["/fam-abuelo"]);
  }

  goHermana(){
    this.router.navigate(["/fam-hermana"]);
  }

  goHermano(){
    this.router.navigate(["/fam-hermano"]);
  }

  goHija(){
    this.router.navigate(["/fam-hija"]);
  }

  goHijo(){
    this.router.navigate(["/fam-hijo"]);
  }

  goMama(){
    this.router.navigate(["/fam-mama"]);
  }

  goPapa(){
    this.router.navigate(["/fam-papa"]);
  }

  goPrimos(){
    this.router.navigate(["/fam-primos"]);
  }

  goTia(){
    this.router.navigate(["/fam-tia"]);
  }

  gotio(){
    this.router.navigate(["/fam-tio"]);
  }

}
