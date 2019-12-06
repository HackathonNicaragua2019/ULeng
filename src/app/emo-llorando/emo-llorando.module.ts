import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmoLlorandoPage } from './emo-llorando.page';

const routes: Routes = [
  {
    path: '',
    component: EmoLlorandoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmoLlorandoPage]
})
export class EmoLlorandoPageModule {}
