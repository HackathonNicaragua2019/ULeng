import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-abecedario',
  templateUrl: './cat-abecedario.page.html',
  styleUrls: ['./cat-abecedario.page.scss'],
})
export class CatAbecedarioPage {

  constructor(private router: Router) { }
  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  home(){
    this.router.navigate(["/home"]);
  }

  goA(){
    this.router.navigate(["/letra-a"]);
  }

  goB(){
    this.router.navigate(["/letra-b"]);
  }

  goC(){
    this.router.navigate(["/letra-c"]);
  }

  goD(){
    this.router.navigate(["/letra-d"]);
  }

  goCH(){
    this.router.navigate(["/letra-ch"]);
  }

  goE(){
    this.router.navigate(["/letra-e"]);
  }

  goF(){
    this.router.navigate(["/letra-f"]);
  }

  goG(){
    this.router.navigate(["/letra-G"]);
  }

  goH(){
    this.router.navigate(["/letra-h"]);
  }

  goI(){
    this.router.navigate(["/letra-i"]);
  }

  goJ(){
    this.router.navigate(["/letra-j"]);
  }

  goK(){
    this.router.navigate(["/letra-k"]);
  }

  goL(){
    this.router.navigate(["/letra-l"]);
  }

  goLL(){
    this.router.navigate(["/letra-ll"]);
  }

  goM(){
    this.router.navigate(["/letra-m"]);
  }

  goN(){
    this.router.navigate(["/letra-n"]);
  }

  goN1(){
    this.router.navigate(["/letra-n1"]);
  }

  goO(){
    this.router.navigate(["/letra-o"]);
  }

  goP(){
    this.router.navigate(["/letra-p"]);
  }

  goQ(){
    this.router.navigate(["/letra-q"]);
  }

  goR(){
    this.router.navigate(["/letra-r"]);
  }

  goRR(){
    this.router.navigate(["/letra-rr"]);
  }

  goS(){
    this.router.navigate(["/letra-s"]);
  }

  goT(){
    this.router.navigate(["/letra-t"]);
  }

  goU(){
    this.router.navigate(["/letra-u"]);
  }

  goV(){
    this.router.navigate(["/letra-v"]);
  }

  goW(){
    this.router.navigate(["/letra-w"]);
  }

  goX(){
    this.router.navigate(["/letra-x"]);
  }

  goY(){
    this.router.navigate(["/letra-y"]);
  }

  goZ(){
    this.router.navigate(["/letra-z"]);
  }

}
