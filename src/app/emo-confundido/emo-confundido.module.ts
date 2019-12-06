import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmoConfundidoPage } from './emo-confundido.page';

const routes: Routes = [
  {
    path: '',
    component: EmoConfundidoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmoConfundidoPage]
})
export class EmoConfundidoPageModule {}
