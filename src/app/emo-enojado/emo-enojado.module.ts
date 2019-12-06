import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmoEnojadoPage } from './emo-enojado.page';

const routes: Routes = [
  {
    path: '',
    component: EmoEnojadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmoEnojadoPage]
})
export class EmoEnojadoPageModule {}
