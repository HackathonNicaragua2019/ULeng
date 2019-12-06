import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DepMatagalpaPage } from './dep-matagalpa.page';

const routes: Routes = [
  {
    path: '',
    component: DepMatagalpaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DepMatagalpaPage]
})
export class DepMatagalpaPageModule {}
