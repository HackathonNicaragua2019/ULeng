import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BebSemjicaroPage } from './beb-semjicaro.page';

const routes: Routes = [
  {
    path: '',
    component: BebSemjicaroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BebSemjicaroPage]
})
export class BebSemjicaroPageModule {}
