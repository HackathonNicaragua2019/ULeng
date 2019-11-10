import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-letra-y',
  templateUrl: './letra-y.page.html',
  styleUrls: ['./letra-y.page.scss'],
})
export class LetraYPage {

    constructor(private router: Router) { }
  
    home(){
      this.router.navigate(["/categorias"]);
    }
  
    regresar_categoria(){
      this.router.navigate(["/cat-abecedario"]);
    }
  
    siguiente(){
      this.router.navigate(["/letra-z"]);
    }
  
    anterior(){
      this.router.navigate(["/letra-w"]);
    }
  
    public ocultar: boolean = false;
    accion(){
      this.ocultar = !this.ocultar;
    }
  

}
