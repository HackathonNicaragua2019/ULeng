import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { AuthGuard } from "../guards/auth.guard";

@Injectable({
  providedIn: 'root'
})
export class FirebaseDbService {

  constructor(public afDB: AngularFireDatabase, public auth: AuthGuard) { }

  guardarSitio(sitio) {
    sitio.id = Date.now();
    return this.afDB.database.ref('sitios/'+this.auth.getUser()+'/'+sitio.id).set(sitio)
  }
}

