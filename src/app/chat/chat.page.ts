import { Component, ViewChild } from '@angular/core';
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";
import { Keyboard } from "@ionic-native/keyboard/ngx";
import * as firebase from 'firebase';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage {

  @ViewChild("content", {static: true}) content: any;
  userName: string = "";
  message: string = "";
  messages = [];

  constructor(public navCtrl: NavController, private router: Router, public keyboard: Keyboard) {
    this.getMessages();
    this.keyboard.show();
  }

  getMessages(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.on("value", (snap) => {
      var data = snap.val();
      this.messages = [];
      for(var key in data){
        this.messages.push(data[key]);
      }
      this.scrollToBottom();
    });
  }

  scrollToBottom(){
    var contentEnd = document.getElementById("content-end").offsetTop;
    this.content.scrollTo(0, contentEnd, 300);
  }

  sendMessage(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({mensaje: this.message, usuario: this.userName });
    this.message = "";
  }

  home(){
    this.router.navigate(["/home"]);
  }
}
