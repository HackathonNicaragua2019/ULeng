import { Component } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NumPage } from "../num/num.page";
import { Router } from "@angular/router";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage {
  miLista = [];

  constructor(public router: Router) { 
    this.inicializar();
   }

  inicializar(){
    this.miLista = [
      'Letra A (a)',
      'Letra B (b)',
      'Letra C (c)',
    ];
  }

  buscar(ev: any){
    this.inicializar();
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.miLista = this.miLista.filter((item) => {
        return(item.toLowerCase().indexOf(val.toLowerCase()) > -1)
      });
      
    }
  }

  goA(){
    this.router.navigate(["/letra-a"]);
  }

}
