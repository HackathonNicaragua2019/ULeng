import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComVigoronPage } from './com-vigoron.page';

const routes: Routes = [
  {
    path: '',
    component: ComVigoronPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComVigoronPage]
})
export class ComVigoronPageModule {}
