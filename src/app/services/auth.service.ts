import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { async } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged: any = false;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => (this.isLogged = user))
  }

  // login
  async onLogin (user) {
    try{
      return await this.afAuth.auth.signInWithEmailAndPassword(
        user.email, 
        user.password
      );
    } catch (error) {
      console.log('Error on login', error);
    }
  }

  //registro
  async onRegister(user){
    try{
      return await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
    } catch (error){
      console.log('Error on register user', error);
    }
  }
}
