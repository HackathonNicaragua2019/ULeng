import { Component } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NumPage } from "../num/num.page";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage {
  miLista = [];

  constructor(public router: Router, public nav: NavController) { 
    this.inicializar();
   }

  inicializar(){
    this.miLista = [
    { 
      title: 'Letra A',
      img: 'assets/img/gif_abecedario/A.gif'
    },
    { 
      title: 'Letra B',
      img: 'assets/img/gif_abecedario/B.gif'
    },
    { 
      title: 'Letra C',
      img: 'assets/img/gif_abecedario/C.gif'
    },
    { 
      title: 'Letra D',
      img: 'assets/img/gif_abecedario/D.gif'
    },
    { 
      title: 'Letra E',
      img: 'assets/img/gif_abecedario/E.gif'
    },
    { 
      title: 'Letra F',
      img: 'assets/img/gif_abecedario/F.gif'
    },
    { 
      title: 'Letra G',
      img: 'assets/img/gif_abecedario/G.gif'
    },
    { 
      title: 'Letra H',
      img: 'assets/img/gif_abecedario/H.gif'
    },];
  }

  buscar(ev: any){
    this.inicializar();
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.miLista = this.miLista.filter((item) => {
        return(item.title.toLowerCase().indexOf(val.toLowerCase()) > -1)
      });
      
    }
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

  go() {
    let navigationExtras: NavigationExtras = {
    queryParams: {
      item: JSON.stringify(this.miLista)
    }
  };
  this.router.navigate(['/num'], navigationExtras);
  }
}
