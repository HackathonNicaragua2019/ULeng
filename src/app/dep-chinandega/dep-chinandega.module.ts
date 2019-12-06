import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DepChinandegaPage } from './dep-chinandega.page';

const routes: Routes = [
  {
    path: '',
    component: DepChinandegaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DepChinandegaPage]
})
export class DepChinandegaPageModule {}
