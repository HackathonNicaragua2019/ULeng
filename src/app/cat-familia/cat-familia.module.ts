import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CatFamiliaPage } from './cat-familia.page';

const routes: Routes = [
  {
    path: '',
    component: CatFamiliaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CatFamiliaPage]
})
export class CatFamiliaPageModule {}
