import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from "@ionic/angular";

@Component({
  selector: 'app-num',
  templateUrl: './num.page.html',
  styleUrls: ['./num.page.scss'],
})
export class NumPage {

  item;

  constructor(public NavParams: NavParams) {
    this.item = NavParams.data.item;
   }

  

}
