import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmoConmocionadoPage } from './emo-conmocionado.page';

const routes: Routes = [
  {
    path: '',
    component: EmoConmocionadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmoConmocionadoPage]
})
export class EmoConmocionadoPageModule {}
