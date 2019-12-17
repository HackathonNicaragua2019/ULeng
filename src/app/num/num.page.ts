import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from "@ionic/angular";
import { ActivatedRoute, Router, Params } from "@angular/router";

@Component({
  selector: 'app-num',
  templateUrl: './num.page.html',
  styleUrls: ['./num.page.scss'],
})
export class NumPage {

  items: any;
  mostrar: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params.item) {
        this.items = JSON.parse(params.item);
      }
    }); 
  }
}
