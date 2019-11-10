import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage {

  constructor (
    private authSvc: AuthService, 
    private router: Router,
    private afAuth: AngularFireAuth
    ) {}

  home(){
    this.router.navigate(["/home"]);
  }

  onLogout(){
    console.log('Salir!');
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }

}
