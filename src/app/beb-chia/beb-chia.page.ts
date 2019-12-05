import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beb-chia',
  templateUrl: './beb-chia.page.html',
  styleUrls: ['./beb-chia.page.scss'],
})
export class BebChiaPage  {
  constructor(private router: Router) { }
  
    home(){
      this.router.navigate(["/categorias"]);
    }
  
    regresar_categoria(){
      this.router.navigate(["/cat-bebidas"]);
    }
  
    siguiente(){
      this.router.navigate(["/beb-chicha"]);
    }
  
    anterior(){
      this.router.navigate(["/beb-cacao"]);
    }
  
    public ocultar: boolean = false;
    accion(){
      this.ocultar = !this.ocultar;
    }
  
  }
  
  
  
