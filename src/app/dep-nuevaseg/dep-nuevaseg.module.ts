import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DepNuevasegPage } from './dep-nuevaseg.page';

const routes: Routes = [
  {
    path: '',
    component: DepNuevasegPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DepNuevasegPage]
})
export class DepNuevasegPageModule {}
