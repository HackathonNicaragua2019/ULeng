import { Component, ViewChild } from '@angular/core';
import { NavController } from "@ionic/angular";
import { Router, NavigationExtras } from "@angular/router";
import { Keyboard } from "@ionic-native/keyboard/ngx";
import { GiphyService } from "../api/giphy.service";
import * as firebase from 'firebase';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage {

  protected gif: any = {image: ''};

  @ViewChild("content", {static: true}) content: any;
  userName: string = "";
  message: string = "";
  imgG: any = "";
  messages = [];

  constructor(public navCtrl: NavController, private router: Router, public keyboard: Keyboard, protected giphyService: GiphyService) {
    this.getMessages();
    this.keyboard.show();
    this.initialize();
  }
  
  img = [
    'assets/img/gif_abecedario/A.gif',
    'assets/img/gif_abecedario/B.gif',
    'assets/img/gif_abecedario/C.gif',
    'assets/img/gif_abecedario/D.gif',
  ]

  initialize() {
    this.getImage();
  }

  getImage(): void {
    const saludos = ['ulenghola', 'ulengadios', 'depressed', 'healthy'];
    const randomNumber: number = Math.floor(Math.random() * 4) +1;
    this.giphyService.getImage(saludos[randomNumber -1]).subscribe(
      (image) => {
        this.gif.image = image.data[0].images.downsized_medium.url;
      }
    );
  }

  shuffle() {
    this.getImage();
  }

  getMessages(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.on("value", (snap) => {
      var data = snap.val();
      this.messages = [];
      for(var key in data){
        this.messages.push(data[key]);
      }
    });
  }

  sendMessage(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({mensaje: this.message, usuario: this.userName, imagen: this.gif.image});
    this.message = "";
  }

  home(){
    this.router.navigate(["/home"]);
  }

  go() {
    let navigationExtras: NavigationExtras = {
    queryParams: {
      item: JSON.stringify(this.img)
    }
  };
  this.router.navigate(['/tec'], navigationExtras);
  }
}
