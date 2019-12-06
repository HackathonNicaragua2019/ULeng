import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmoAmistosoPage } from './emo-amistoso.page';

const routes: Routes = [
  {
    path: '',
    component: EmoAmistosoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmoAmistosoPage]
})
export class EmoAmistosoPageModule {}
