import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmoEnamoradoPage } from './emo-enamorado.page';

const routes: Routes = [
  {
    path: '',
    component: EmoEnamoradoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmoEnamoradoPage]
})
export class EmoEnamoradoPageModule {}
