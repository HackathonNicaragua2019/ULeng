import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DepJinotegaPage } from './dep-jinotega.page';

const routes: Routes = [
  {
    path: '',
    component: DepJinotegaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DepJinotegaPage]
})
export class DepJinotegaPageModule {}
