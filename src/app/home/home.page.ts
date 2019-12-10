import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from "@ionic/angular";
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor (
    private authSvc: AuthService, 
    private router: Router,
    public navCtrl: NavController,
    private afAuth: AngularFireAuth) {}
    
    
  goCategorias(){
    this.router.navigate(["/categorias"]);
  }

  goTeclado(){
    this.router.navigate(["/chat"]);
  }

  goBuscador(){
    this.router.navigate(["/buscador"]);
  }

  onLogout(){
    console.log('Salir!');
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }

}
