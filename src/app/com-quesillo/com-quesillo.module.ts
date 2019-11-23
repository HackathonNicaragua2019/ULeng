import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComQuesilloPage } from './com-quesillo.page';

const routes: Routes = [
  {
    path: '',
    component: ComQuesilloPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComQuesilloPage]
})
export class ComQuesilloPageModule {}
