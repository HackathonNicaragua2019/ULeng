import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-bebidas',
  templateUrl: './cat-bebidas.page.html',
  styleUrls: ['./cat-bebidas.page.scss'],
})
export class CatBebidasPage {

  constructor(private router: Router) { }
  
  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  home(){
    this.router.navigate(["/home"]);
  }

  goCacao(){
    this.router.navigate(["/beb-cacao"]);
  }

  goChia(){
    this.router.navigate(["/beb-chia"]);
  }

  goChicha(){
    this.router.navigate(["/beb-chicha"]);
  }

  goJengibre(){
    this.router.navigate(["/beb-jengibre"]);
  }

  goLinaza(){
    this.router.navigate(["/beb-linaza"]);
  }

  goPinol(){
    this.router.navigate(["/beb-pinol"]);
  }

  goPinolillo(){
    this.router.navigate(["/beb-pinolillo"]);
  }

  goPozol(){
    this.router.navigate(["/beb-pozol"]);
  }

  goJicaro(){
    this.router.navigate(["/beb-semjicaro"]);
  }

  goTibio(){
    this.router.navigate(["/beb-tibio"]);
  }

  goTiste(){
    this.router.navigate(["/beb-tiste"]);
  }

}
