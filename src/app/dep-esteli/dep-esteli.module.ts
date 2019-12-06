import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DepEsteliPage } from './dep-esteli.page';

const routes: Routes = [
  {
    path: '',
    component: DepEsteliPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DepEsteliPage]
})
export class DepEsteliPageModule {}
