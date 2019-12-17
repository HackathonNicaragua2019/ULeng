import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";

@Component({
  selector: 'app-tec',
  templateUrl: './tec.page.html',
  styleUrls: ['./tec.page.scss'],
})
export class TecPage {

  items: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params.item) {
        this.items = JSON.parse(params.item);
      }
    }); 
  }

  

}
