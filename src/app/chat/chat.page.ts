import { Component, ViewChild } from '@angular/core';
import { NavController, IonContent, MenuController } from "@ionic/angular";
import { Router, ActivatedRoute } from "@angular/router";
import { Keyboard } from "@ionic-native/keyboard/ngx";
import { GiphyService } from "../api/giphy.service";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as firebase from 'firebase';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage {

  protected gif: any = {image: ''};
  myPhoto: any;

  @ViewChild(IonContent, {read: IonContent, static: false}) content: IonContent;
  userName: string = "";
  message: string = "";
  imgG: any = "";
  messages = [];

  constructor(public navCtrl: NavController, 
    private router: Router, 
    public keyboard: Keyboard, 
    private route: ActivatedRoute, 
    protected giphyService: GiphyService, 
    private menuCtrl: MenuController,
    private camera: Camera) 
    {
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
    this.getImage5();
    this.getImage6();
    this.getImage7();
    this.getImage8();
    this.getImage9();
    this.getImage10();
    this.getImage11();
    this.getImage12();
    this.getImage13();
    this.getImage14();
    this.getImage15();
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom(300);
    }, 1000);
  }

  getImage(): void {
    const saludos = ['asl sordo', 'asl sordo', 'asl sordo', 'asl sordo'];
    const randomNumber: number = Math.floor(Math.random() * 4) +1;
    this.giphyService.getImage(saludos[randomNumber -1]).subscribe(
      (image) => {
        this.gif.image = image.data[0].images.downsized_medium.url;
      }
    );
  }

  getImage1(): void {
    const saludos = ['ASL recordar', 'ASL recordar', 'ASL recordar', 'ASL recordar'];
    const randomNumber: number = Math.floor(Math.random() * 4) +1;
    this.giphyService.getImage1(saludos[randomNumber -1]).subscribe(
      (images) => {
        this.gif.images = images.data[0].images.downsized_medium.url;
      }
    );
  }

  getImage2(): void {
    const saludos = ['asl encontrar', 'asl encontrar', 'asl encontrar', 'asl encontrar'];
    const randomNumber: number = Math.floor(Math.random() * 4) +1;
    this.giphyService.getImage2(saludos[randomNumber -1]).subscribe(
      (images2) => {
        this.gif.images2 = images2.data[0].images.downsized_medium.url;
      }
    );
  }

  getImage3(): void {
    const saludos = ['asl elegir', 'asl elegir', 'asl elegir', 'asl elegir'];
    const randomNumber: number = Math.floor(Math.random() * 4) +1;
    this.giphyService.getImage3(saludos[randomNumber -1]).subscribe(
      (images3) => {
        this.gif.images3 = images3.data[0].images.downsized_medium.url;
      }
    );
  }

  getImage4(): void {
    const saludos = ['ASL hola', 'ASL hola', 'ASL hola', 'ASL hola'];
    const randomNumber: number = Math.floor(Math.random() * 4) +1;
    this.giphyService.getImage4(saludos[randomNumber -1]).subscribe(
      (images4) => {
        this.gif.images4 = images4.data[0].images.downsized_medium.url;
      }
    );
  }

  getImage5(): void {
    const saludos = ['asl not', 'asl not', 'asl not', 'asl not'];
    const randomNumber: number = Math.floor(Math.random() * 4) +1;
    this.giphyService.getImage(saludos[randomNumber -1]).subscribe(
      (images5) => {
        this.gif.images5 = images5.data[0].images.downsized_medium.url;
      }
    );
  }

  getImage6(): void {
    const saludos = ['asl abrazar', 'asl abrazar', 'asl abrazar', 'asl abrazar'];
    const randomNumber: number = Math.floor(Math.random() * 4) +1;
    this.giphyService.getImage(saludos[randomNumber -1]).subscribe(
      (images6) => {
        this.gif.images6 = images6.data[0].images.downsized_medium.url;
      }
    );
  }

  getImage7(): void {
    const saludos = ['asl amigo', 'asl amigo', 'asl amigo', 'asl amigo'];
    const randomNumber: number = Math.floor(Math.random() * 4) +1;
    this.giphyService.getImage(saludos[randomNumber -1]).subscribe(
      (images7) => {
        this.gif.images7 = images7.data[0].images.downsized_medium.url;
      }
    );
  }

  getImage8(): void {
    const saludos = ['asl novio', 'asl novio', 'asl novio', 'asl novio'];
    const randomNumber: number = Math.floor(Math.random() * 4) +1;
    this.giphyService.getImage(saludos[randomNumber -1]).subscribe(
      (images8) => {
        this.gif.images8 = images8.data[0].images.downsized_medium.url;
      }
    );
  }

  getImage9(): void {
    const saludos = ['asl cuanto', 'asl cuanto', 'asl cuanto', 'asl cuanto'];
    const randomNumber: number = Math.floor(Math.random() * 4) +1;
    this.giphyService.getImage(saludos[randomNumber -1]).subscribe(
      (images9) => {
        this.gif.images9 = images9.data[0].images.downsized_medium.url;
      }
    );
  }

  getImage10(): void {
    const saludos = ['asl discutir', 'asl discutir', 'asl discutir', 'asl discutir'];
    const randomNumber: number = Math.floor(Math.random() * 4) +1;
    this.giphyService.getImage(saludos[randomNumber -1]).subscribe(
      (images10) => {
        this.gif.images10 = images10.data[0].images.downsized_medium.url;
      }
    );
  }

  getImage11(): void {
    const saludos = ['asl que', 'asl que', 'asl que', 'asl que'];
    const randomNumber: number = Math.floor(Math.random() * 4) +1;
    this.giphyService.getImage(saludos[randomNumber -1]).subscribe(
      (images11) => {
        this.gif.images11 = images11.data[0].images.downsized_medium.url;
      }
    );
  }

  getImage12(): void {
    const saludos = ['asl crecer', 'asl crecer', 'asl crecer', 'asl crecer'];
    const randomNumber: number = Math.floor(Math.random() * 4) +1;
    this.giphyService.getImage(saludos[randomNumber -1]).subscribe(
      (images12) => {
        this.gif.images12 = images12.data[0].images.downsized_medium.url;
      }
    );
  }

  getImage13(): void {
    const saludos = ['asl huir', 'asl huir', 'asl huir', 'asl huir'];
    const randomNumber: number = Math.floor(Math.random() * 4) +1;
    this.giphyService.getImage(saludos[randomNumber -1]).subscribe(
      (images13) => {
        this.gif.images13 = images13.data[0].images.downsized_medium.url;
      }
    );
  }

  getImage14(): void {
    const saludos = ['asl obedecer', 'asl obedecer', 'asl obedecer', 'asl obedecer'];
    const randomNumber: number = Math.floor(Math.random() * 4) +1;
    this.giphyService.getImage(saludos[randomNumber -1]).subscribe(
      (images14) => {
        this.gif.images14 = images14.data[0].images.downsized_medium.url;
      }
    );
  }

  getImage15(): void {
    const saludos = ['asl cuantosanos', 'asl cuantosanos', 'asl cuantosanos', 'asl cuantosanos'];
    const randomNumber: number = Math.floor(Math.random() * 4) +1;
    this.giphyService.getImage(saludos[randomNumber -1]).subscribe(
      (images15) => {
        this.gif.images15 = images15.data[0].images.downsized_medium.url;
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

  sendMessageText(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({mensaje: this.message, usuario: this.userName});
    this.message = "";
  }
  
  sendMessage(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({usuario: this.userName, imagen: this.gif.image});
    this.message = "";
  }

  sendMessage1(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({usuario: this.userName, imagen: this.gif.images});
    this.message = "";
  }

  sendMessage2(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({usuario: this.userName, imagen: this.gif.images2});
    this.message = "";
  }

  sendMessage3(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({usuario: this.userName, imagen: this.gif.images3});
    this.message = "";
  }

  sendMessage4(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({usuario: this.userName, imagen: this.gif.images4});
    this.message = "";
  }

  sendMessage5(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({usuario: this.userName, imagen: this.gif.images5});
    this.message = "";
  }

  sendMessage6(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({usuario: this.userName, imagen: this.gif.images6});
    this.message = "";
  }

  sendMessage7(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({usuario: this.userName, imagen: this.gif.images7});
    this.message = "";
  }

  sendMessage8(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({usuario: this.userName, imagen: this.gif.images8});
    this.message = "";
  }

  sendMessage9(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({usuario: this.userName, imagen: this.gif.images9});
    this.message = "";
  }

  sendMessage10(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({usuario: this.userName, imagen: this.gif.images10});
    this.message = "";
  }

  sendMessage11(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({usuario: this.userName, imagen: this.gif.images11});
    this.message = "";
  }

  sendMessage12(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({usuario: this.userName, imagen: this.gif.images12});
    this.message = "";
  }

  sendMessage13(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({usuario: this.userName, imagen: this.gif.images13});
    this.message = "";
  }

  sendMessage14(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({usuario: this.userName, imagen: this.gif.images14});
    this.message = "";
  }

  sendMessage15(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({usuario: this.userName, imagen: this.gif.images15});
    this.message = "";
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.myPhoto = 'data:image/jpeg;base64,' + imageData;
      var messagesRef = firebase.database().ref().child("mensajes");
      messagesRef.push({usuario: this.userName, imagen: this.myPhoto});
      this.message = "";
    }, (err) => {

    });
  }

  getPhoto() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    }
    this.camera.getPicture(options).then((imageData) => {
      this.myPhoto = 'data:image/jpeg;base64,' + imageData;
      var messagesRef = firebase.database().ref().child("mensajes");
      messagesRef.push({usuario: this.userName, imagen: this.myPhoto});
      this.message = "";
    }, (err) => {

    });
  }


  home(){
    this.router.navigate(["/home"]);
  }
}
