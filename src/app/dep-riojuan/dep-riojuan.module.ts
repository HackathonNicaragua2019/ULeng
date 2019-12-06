import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DepRiojuanPage } from './dep-riojuan.page';

const routes: Routes = [
  {
    path: '',
    component: DepRiojuanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DepRiojuanPage]
})
export class DepRiojuanPageModule {}
