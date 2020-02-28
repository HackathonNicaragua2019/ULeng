import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from "@ionic/angular";
import { MenuComponent } from "./menu/menu.component";
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
/* import { GifSearchComponent } from "./gif-search/gif-search.component";
import { InputWithGiphyComponent } from "./input-with-giphy/input-with-giphy.component"; */



@NgModule({
  declarations: [
    MenuComponent,
    /* GifSearchComponent,
    InputWithGiphyComponent */
  ],
  exports: [
    MenuComponent,
    /* GifSearchComponent,
    InputWithGiphyComponent */
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ComponentesModule { }
