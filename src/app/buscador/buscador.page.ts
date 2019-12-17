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
    },
    { 
      title: 'Letra I',
      img: 'assets/img/gif_abecedario/I.gif'
    },
    { 
      title: 'Letra J',
      img: 'assets/img/gif_abecedario/J.gif'
    },
    { 
      title: 'Letra K',
      img: 'assets/img/gif_abecedario/K.gif'
    },
    { 
      title: 'Letra L',
      img: 'assets/img/gif_abecedario/L.gif'
    },
    { 
      title: 'Letra LL',
      img: 'assets/img/gif_abecedario/LL.gif'
    },
    { 
      title: 'Letra M',
      img: 'assets/img/gif_abecedario/M.gif'
    },
    { 
      title: 'Letra N',
      img: 'assets/img/gif_abecedario/N.gif'
    },
    { 
      title: 'Letra Ñ',
      img: 'assets/img/gif_abecedario/Ñ.gif'
    },
    { 
      title: 'Letra O',
      img: 'assets/img/gif_abecedario/O.gif'
    },
    { 
      title: 'Letra P',
      img: 'assets/img/gif_abecedario/P.gif'
    },
    { 
      title: 'Letra Q',
      img: 'assets/img/gif_abecedario/Q.gif'
    },
    { 
      title: 'Letra R',
      img: 'assets/img/gif_abecedario/R.gif'
    },
    { 
      title: 'Letra RR',
      img: 'assets/img/gif_abecedario/Rr.gif'
    },
    { 
      title: 'Letra S',
      img: 'assets/img/gif_abecedario/S.gif'
    },
    { 
      title: 'Letra T',
      img: 'assets/img/gif_abecedario/T.gif'
    },
    { 
      title: 'Letra U',
      img: 'assets/img/gif_abecedario/U.gif'
    },
    { 
      title: 'Letra V',
      img: 'assets/img/gif_abecedario/V.gif'
    },
    { 
      title: 'Letra W',
      img: 'assets/img/gif_abecedario/W.gif'
    },
    { 
      title: 'Letra X',
      img: 'assets/img/gif_abecedario/X.gif'
    },
    { 
      title: 'Letra Y',
      img: 'assets/img/gif_abecedario/Y.gif'
    },
    { 
      title: 'Letra Z',
      img: 'assets/img/gif_abecedario/Z.gif'
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
