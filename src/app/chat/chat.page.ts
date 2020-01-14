import { Component, ViewChild } from '@angular/core';
import { NavController, IonContent } from "@ionic/angular";
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

  @ViewChild(IonContent, {read: IonContent, static: false}) content: IonContent;
  userName: string = "";
  message: string = "";
  imgG: any = "";
  messages = [];

  constructor(public navCtrl: NavController, private router: Router, public keyboard: Keyboard, protected giphyService: GiphyService) {
    this.getMessages();
    this.keyboard.show();
    this.initialize();
  }

  initialize() {
    this.scrollToBottom();
    this.getImage();
    this.getImage1();
    this.getImage2();
    this.getImage3();
    this.getImage4();
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom(300);
    }, 1000);
  }

  getImage(): void {
    const saludos = ['sign language', 'sign language', 'sign language', 'sign language'];
    const randomNumber: number = Math.floor(Math.random() * 4) +1;
    this.giphyService.getImage(saludos[randomNumber -1]).subscribe(
      (image) => {
        this.gif.image = image.data[0].images.downsized_medium.url;
      }
    );
  }

  getImage1(): void {
    const saludos = ['deaf', 'deaf', 'deaf', 'deaf'];
    const randomNumber: number = Math.floor(Math.random() * 4) +1;
    this.giphyService.getImage1(saludos[randomNumber -1]).subscribe(
      (images) => {
        this.gif.images = images.data[0].images.downsized_medium.url;
      }
    );
  }

  getImage2(): void {
    const saludos = ['signlanguage', 'signlanguage', 'signlanguage', 'signlanguage'];
    const randomNumber: number = Math.floor(Math.random() * 4) +1;
    this.giphyService.getImage2(saludos[randomNumber -1]).subscribe(
      (images2) => {
        this.gif.images2 = images2.data[0].images.downsized_medium.url;
      }
    );
  }

  getImage3(): void {
    const saludos = ['lolatpablo', 'lolatpablo', 'lolatpablo', 'lolatpablo'];
    const randomNumber: number = Math.floor(Math.random() * 4) +1;
    this.giphyService.getImage3(saludos[randomNumber -1]).subscribe(
      (images3) => {
        this.gif.images3 = images3.data[0].images.downsized_medium.url;
      }
    );
  }

  getImage4(): void {
    const saludos = ['signingwithnyle', 'signingwithnyle', 'signingwithnyle', 'signingwithnyle'];
    const randomNumber: number = Math.floor(Math.random() * 4) +1;
    this.giphyService.getImage4(saludos[randomNumber -1]).subscribe(
      (images4) => {
        this.gif.images4 = images4.data[0].images.downsized_medium.url;
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

  sendMessage1(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({mensaje: this.message, usuario: this.userName, imagen: this.gif.images});
    this.message = "";
  }

  sendMessage2(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({mensaje: this.message, usuario: this.userName, imagen: this.gif.images2});
    this.message = "";
  }

  sendMessage3(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({mensaje: this.message, usuario: this.userName, imagen: this.gif.images3});
    this.message = "";
  }

  sendMessage4(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({mensaje: this.message, usuario: this.userName, imagen: this.gif.images4});
    this.message = "";
  }

  home(){
    this.router.navigate(["/home"]);
  }
}
