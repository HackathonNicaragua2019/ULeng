import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-numeros',
  templateUrl: './cat-numeros.page.html',
  styleUrls: ['./cat-numeros.page.scss'],
})
export class CatNumerosPage {

  constructor(private router: Router) { }
  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  home(){
    this.router.navigate(["/home"]);
  }

  go1(){
    this.router.navigate(["/num1"]);
  }

  go2(){
    this.router.navigate(["/num2"]);
  }

  go3(){
    this.router.navigate(["/num3"]);
  }

  go4(){
    this.router.navigate(["/num4"]);
  }

  go5(){
    this.router.navigate(["/num5"]);
  }

  go6(){
    this.router.navigate(["/num6"]);
  }

  go7(){
    this.router.navigate(["/num7"]);
  }

  go8(){
    this.router.navigate(["/num8"]);
  }

  go9(){
    this.router.navigate(["/num9"]);
  }

  go10(){
    this.router.navigate(["/num10"]);
  }

  go11(){
    this.router.navigate(["/num11"]);
  }

  go12(){
    this.router.navigate(["/num12"]);
  }

  go13(){
    this.router.navigate(["/num13"]);
  }

  go14(){
    this.router.navigate(["/num14"]);
  }

  go15(){
    this.router.navigate(["/num15"]);
  }

  go16(){
    this.router.navigate(["/num16"]);
  }

  go17(){
    this.router.navigate(["/num17"]);
  }

  go18(){
    this.router.navigate(["/num18"]);
  }

  go19(){
    this.router.navigate(["/num19"]);
  }

  go20(){
    this.router.navigate(["/num20"]);
  }

}
