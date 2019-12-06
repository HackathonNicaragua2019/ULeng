import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmoCansadoPage } from './emo-cansado.page';

const routes: Routes = [
  {
    path: '',
    component: EmoCansadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmoCansadoPage]
})
export class EmoCansadoPageModule {}
