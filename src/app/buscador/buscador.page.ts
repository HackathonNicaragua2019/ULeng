import { Component } from '@angular/core';
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage {
  componentes: Componente[] = []

  constructor(public router: Router, public nav: NavController) { 
    this.inicializar();
   }

  inicializar(){
    this.componentes = [
      {
        name: 'Letra A',
        redirectTo: '/letra-a'
      },
      {
        name: 'Letra B',
        redirectTo: '/letra-b'
      },
      {
        name: 'Letra C',
        redirectTo: '/letra-c'
      },
      {
        name: 'Letra CH',
        redirectTo: '/letra-ch'
      },
      {
        name: 'Letra D',
        redirectTo: '/letra-d'
      },
      {
        name: 'Letra E',
        redirectTo: '/letra-e'
      },
      {
        name: 'Letra E',
        redirectTo: '/letra-e'
      },
      {
        name: 'Letra F',
        redirectTo: '/letra-f'
      },
      {
        name: 'Letra G',
        redirectTo: '/letra-g'
      },
      {
        name: 'Letra H',
        redirectTo: '/letra-h'
      },
      {
        name: 'Letra I',
        redirectTo: '/letra-i'
      },
      {
        name: 'Letra J',
        redirectTo: '/letra-j'
      },
      {
        name: 'Letra K',
        redirectTo: '/letra-k'
      },
      {
        name: 'Letra L',
        redirectTo: '/letra-l'
      },
      {
        name: 'Letra LL',
        redirectTo: '/letra-ll'
      },
      {
        name: 'Letra M',
        redirectTo: '/letra-m'
      },
      {
        name: 'Letra N',
        redirectTo: '/letra-n'
      },
      {
        name: 'Letra Ñ',
        redirectTo: '/letra-n1'
      },
      {
        name: 'Letra O',
        redirectTo: '/letra-o'
      },
      {
        name: 'Letra P',
        redirectTo: '/letra-p'
      },
      {
        name: 'Letra Q',
        redirectTo: '/letra-q'
      },
      {
        name: 'Letra R',
        redirectTo: '/letra-r'
      },
      {
        name: 'Letra RR',
        redirectTo: '/letra-rr'
      },
      {
        name: 'Letra S',
        redirectTo: '/letra-s'
      },
      {
        name: 'Letra T',
        redirectTo: '/letra-t'
      },
      {
        name: 'Letra U',
        redirectTo: '/letra-u'
      },
      {
        name: 'Letra V',
        redirectTo: '/letra-v'
      },
      {
        name: 'Letra W',
        redirectTo: '/letra-w'
      },
      {
        name: 'Letra X',
        redirectTo: '/letra-x'
      },
      {
        name: 'Letra Y',
        redirectTo: '/letra-y'
      },
      {
        name: 'Letra Z',
        redirectTo: '/letra-z'
      },
      {
        name: 'Número 1',
        redirectTo: '/num1'
      },
      {
        name: 'Número 2',
        redirectTo: '/num2'
      },
      {
        name: 'Número 3',
        redirectTo: '/num3'
      },
      {
        name: 'Número 4',
        redirectTo: '/num4'
      },
      {
        name: 'Número 5',
        redirectTo: '/num5'
      },
      {
        name: 'Número 6',
        redirectTo: '/num6'
      },
      {
        name: 'Número 7',
        redirectTo: '/num7'
      },
      {
        name: 'Número 8',
        redirectTo: '/num8'
      },
      {
        name: 'Número 9',
        redirectTo: '/num9'
      },
      {
        name: 'Número 10',
        redirectTo: '/num10'
      },
      {
        name: 'Número 11',
        redirectTo: '/num11'
      },
      {
        name: 'Número 12',
        redirectTo: '/num12'
      },
      {
        name: 'Número 13',
        redirectTo: '/num13'
      },
      {
        name: 'Número 14',
        redirectTo: '/num14'
      },
      {
        name: 'Número 15',
        redirectTo: '/num15'
      },
      {
        name: 'Número 16',
        redirectTo: '/num16'
      },
      {
        name: 'Número 17',
        redirectTo: '/num17'
      },
      {
        name: 'Número 18',
        redirectTo: '/num18'
      },
      {
        name: 'Número 19',
        redirectTo: '/num19'
      },
      {
        name: 'Número 20',
        redirectTo: '/num20'
      },
      {
        name: '[Animal] Ardilla',
        redirectTo: '/ani-ardilla'
      },
      {
        name: '[Animal] Caballo',
        redirectTo: '/ani-caballo'
      },
      {
        name: '[Animal] Cerdo',
        redirectTo: '/ani-cerdo'
      },
      {
        name: '[Animal] Conejo',
        redirectTo: '/ani-conejo'
      },
      {
        name: '[Animal] Gallina',
        redirectTo: '/ani-gallina'
      },
      {
        name: '[Animal] Gallo',
        redirectTo: '/ani-gallo'
      },
      {
        name: '[Animal] Gato',
        redirectTo: '/ani-gato'
      },
      {
        name: '[Animal] Mono',
        redirectTo: '/ani-mono'
      },
      {
        name: '[Animal] Perro',
        redirectTo: '/ani-perro'
      },
      {
        name: '[Animal] Vaca',
        redirectTo: '/ani-vaca'
      },
      {
        name: '[Bebidas Típicas] Cacao',
        redirectTo: '/beb-cacao'
      },
      {
        name: '[Bebidas Típicas] Chía',
        redirectTo: '/beb-chia'
      },
      {
        name: '[Bebidas Típicas] Chicha',
        redirectTo: '/beb-chicha'
      },
      {
        name: '[Bebidas Típicas] Jengibre',
        redirectTo: '/beb-jengibre'
      },
      {
        name: '[Bebidas Típicas] Linaza',
        redirectTo: '/beb-linaza'
      },
      {
        name: '[Bebidas Típicas] Pinol',
        redirectTo: '/beb-pinol'
      },
      {
        name: '[Bebidas Típicas] Pinolillo',
        redirectTo: '/beb-pinolillo'
      },
      {
        name: '[Bebidas Típicas] Pozol',
        redirectTo: '/beb-pozol'
      },
      {
        name: '[Bebidas Típicas] Semilla de Jícaro',
        redirectTo: '/beb-semjicaro'
      },
      {
        name: '[Bebidas Típicas] Tibio',
        redirectTo: '/beb-tibio'
      },
      {
        name: '[Bebidas Típicas] Tiste',
        redirectTo: '/beb-tiste'
      },
      {
        name: '[Colores] Amarillo',
        redirectTo: '/col-amarillo'
      },
      {
        name: '[Colores] Azul',
        redirectTo: '/col-azul'
      },
      {
        name: '[Colores] Blanco',
        redirectTo: '/col-blanco'
      },
      {
        name: '[Colores] Celeste',
        redirectTo: '/col-celeste'
      },
      {
        name: '[Colores] Morado',
        redirectTo: '/col-morado'
      },
      {
        name: '[Colores] Naranja',
        redirectTo: '/col-naranja'
      },
      {
        name: '[Colores] Negro',
        redirectTo: '/col-negro'
      },
      {
        name: '[Colores] Rojo',
        redirectTo: '/col-rojo'
      },
      {
        name: '[Colores] Rosado',
        redirectTo: '/col-rosado'
      },
      {
        name: '[Colores] Verde',
        redirectTo: '/col-verde'
      },
      {
        name: '[Comidas Típicas] Baho',
        redirectTo: '/com-baho'
      },
      {
        name: '[Comidas Típicas] Carne Asada',
        redirectTo: '/com-asado'
      },
      {
        name: '[Comidas Típicas] Chancho con Yuca',
        redirectTo: '/com-chanyuca'
      },
      {
        name: '[Comidas Típicas] Gallo Pinto',
        redirectTo: '/com-gallopinto'
      },
      {
        name: '[Comidas Típicas] Indio Viejo',
        redirectTo: '/com-indioviejo'
      },
      {
        name: '[Comidas Típicas] Nacatamal',
        redirectTo: '/com-nacatamal'
      },
      {
        name: '[Comidas Típicas] Quesillo',
        redirectTo: '/com-quesillo'
      },
      {
        name: '[Comidas Típicas] Rondon',
        redirectTo: '/com-rondon'
      },
      {
        name: '[Comidas Típicas] Güirila',
        redirectTo: '/com-sopamond'
      },
      {
        name: '[Comidas Típicas] Vigorón',
        redirectTo: '/com-vigoron'
      },
      {
        name: '[Departamentos] Boaco',
        redirectTo: '/dep-boaco'
      },
      {
        name: '[Departamentos] Carazo',
        redirectTo: '/dep-carazo'
      },
      {
        name: '[Departamentos] Chinandega',
        redirectTo: '/dep-chinandega'
      },
      {
        name: '[Departamentos] Chontales',
        redirectTo: '/dep-chontales'
      },
      {
        name: '[Departamentos] Estelí',
        redirectTo: '/dep-esteli'
      },
      {
        name: '[Departamentos] Granada',
        redirectTo: '/dep-granada'
      },
      {
        name: '[Departamentos] Jinotega',
        redirectTo: '/dep-jinotega'
      },
      {
        name: '[Departamentos] León',
        redirectTo: '/dep-leon'
      },
      {
        name: '[Departamentos] Madriz',
        redirectTo: '/dep-madriz'
      },
      {
        name: '[Departamentos] Managua',
        redirectTo: '/dep-managua'
      },
      {
        name: '[Departamentos] Masaya',
        redirectTo: '/dep-masaya'
      },
      {
        name: '[Departamentos] Matagalpa',
        redirectTo: '/dep-matagalpa'
      },
      {
        name: '[Departamentos] Nueva Segovia',
        redirectTo: '/dep-nuevaseg'
      },
      {
        name: '[Departamentos] RACCN',
        redirectTo: '/dep-raccn'
      },
      {
        name: '[Departamentos] RACCS',
        redirectTo: '/dep-raccs'
      },
      {
        name: '[Departamentos] Río San Juan',
        redirectTo: '/dep-riojuan'
      },
      {
        name: '[Departamentos] Rivas',
        redirectTo: '/dep-rivas'
      },
      {
        name: '[Deportes] Baloncesto',
        redirectTo: '/depo-baloncesto'
      },
      {
        name: '[Deportes] Béisbol',
        redirectTo: '/depo-beisbol'
      },
      {
        name: '[Deportes] Fútbol',
        redirectTo: '/depo-futbol'
      },
      {
        name: '[Deportes] Natación',
        redirectTo: '/depo-natacion'
      },
      {
        name: '[Deportes] Tenis',
        redirectTo: '/depo-tenis'
      },
      {
        name: '[Emociones] Amistoso',
        redirectTo: '/emo-amistoso'
      },
      {
        name: '[Emociones] Cansado',
        redirectTo: '/emo-cansado'
      },
      {
        name: '[Emociones] Confundido',
        redirectTo: '/emo-confundido'
      },
      {
        name: '[Emociones] Conmocionado',
        redirectTo: '/emo-conmocionado'
      },
      {
        name: '[Emociones] Enamorado',
        redirectTo: '/emo-enamorado'
      },
      {
        name: '[Emociones] Enojado',
        redirectTo: '/emo-enojado'
      },
      {
        name: '[Emociones] Feliz',
        redirectTo: '/emo-feliz'
      },
      {
        name: '[Emociones] Llorando',
        redirectTo: '/emo-llorando'
      },
      {
        name: '[Emociones] Triste',
        redirectTo: '/emo-triste'
      },
      {
        name: '[Familia] Abuela',
        redirectTo: '/fam-abuela'
      },
      {
        name: '[Familia] Abuelo',
        redirectTo: '/fam-abuelo'
      },
      {
        name: '[Familia] Hermana',
        redirectTo: '/fam-hermana'
      },
      {
        name: '[Familia] Hermano',
        redirectTo: '/fam-hermano'
      },
      {
        name: '[Familia] Hija',
        redirectTo: '/fam-hija'
      },
      {
        name: '[Familia] Hijo',
        redirectTo: '/fam-hijo'
      },
      {
        name: '[Familia] Mamá',
        redirectTo: '/fam-mama'
      },
      {
        name: '[Familia] Papá',
        redirectTo: '/fam-papa'
      },
      {
        name: '[Familia] Primos',
        redirectTo: '/fam-primos'
      },
      {
        name: '[Familia] Tía',
        redirectTo: '/fam-tia'
      },
      {
        name: '[Familia] Tío',
        redirectTo: '/fam-tio'
      },
      {
        name: '[Instrumentos Musicales] Acordeón',
        redirectTo: '/ins-acordeon'
      },
      {
        name: '[Instrumentos Musicales] Flauta',
        redirectTo: '/ins-flauta'
      },
      {
        name: '[Instrumentos Musicales] Guitarra',
        redirectTo: '/ins-guitarra'
      },
      {
        name: '[Instrumentos Musicales] Piano',
        redirectTo: '/ins-piano'
      },
      {
        name: '[Instrumentos Musicales] Violín',
        redirectTo: '/ins-violin'
      },
      {
        name: '[Saludos] Adiós',
        redirectTo: '/sal-adios'
      },
      {
        name: '[Saludos] Buenas Noches',
        redirectTo: '/sal-buenasnoches'
      },
      {
        name: '[Saludos] Buenas Tardes',
        redirectTo: '/sal-buenastardes'
      },
      {
        name: '[Saludos] Buenos Días',
        redirectTo: '/sal-buenosdias'
      },
      {
        name: '[Saludos] ¿Cómo Estás?',
        redirectTo: '/sal-comoestas'
      },
      {
        name: '[Saludos] Con Permiso',
        redirectTo: '/sal-compermiso'
      },
      {
        name: '[Saludos] Disculpa',
        redirectTo: '/sal-disculpa'
      },
      {
        name: '[Saludos] Hasta Pronto',
        redirectTo: '/sal-hastapronto'
      },
      {
        name: '[Saludos] Hola',
        redirectTo: '/sal-hola'
      },
      {
        name: '[Saludos] Por Favor',
        redirectTo: '/sal-porfavor'
      }
    ]
  }

  buscar(ev: any){
    this.inicializar();
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.componentes = this.componentes.filter((item) => {
        return(item.name.toLowerCase().indexOf(val.toLowerCase()) > -1)
      });
      
    }
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }
}

interface Componente {
  name: string;
  redirectTo: string;
}
