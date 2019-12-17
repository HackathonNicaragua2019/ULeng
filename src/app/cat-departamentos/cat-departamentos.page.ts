import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-departamentos',
  templateUrl: './cat-departamentos.page.html',
  styleUrls: ['./cat-departamentos.page.scss'],
})
export class CatDepartamentosPage {

  constructor(private router: Router) { }
  
  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  home(){
    this.router.navigate(["/home"]);
  }

  goBoaco(){
    this.router.navigate(["/dep-boaco"]);
  }

  goCarazo(){
    this.router.navigate(["/dep-carazo"]);
  }

  goChinandega(){
    this.router.navigate(["/dep-chinandega"]);
  }

  goChontales(){
    this.router.navigate(["/dep-chontales"]);
  }

  goEsteli(){
    this.router.navigate(["/dep-esteli"]);
  }

  goGrananda(){
    this.router.navigate(["/dep-grananda"]);
  }

  goJinotega(){
    this.router.navigate(["/dep-jinotega"]);
  }

  goLeon(){
    this.router.navigate(["/dep-leon"]);
  }

  goMadriz(){
    this.router.navigate(["/dep-madriz"]);
  }

  goManagua(){
    this.router.navigate(["/dep-managua"]);
  }

  goMasaya(){
    this.router.navigate(["/dep-masaya"]);
  }

  goMatagalpa(){
    this.router.navigate(["/dep-matagalpa"]);
  }

  goNuevaS(){
    this.router.navigate(["/dep-nuevaseg"]);
  }

  goRACCN(){
    this.router.navigate(["/dep-raccn"]);
  }

  goRACCS(){
    this.router.navigate(["/dep-raccs"]);
  }

  goRioJ(){
    this.router.navigate(["/dep-riojuan"]);
  }

  goRivas(){
    this.router.navigate(["/dep-rivas"]);
  }

}