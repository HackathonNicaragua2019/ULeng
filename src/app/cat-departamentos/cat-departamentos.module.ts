import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CatDepartamentosPage } from './cat-departamentos.page';

const routes: Routes = [
  {
    path: '',
    component: CatDepartamentosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CatDepartamentosPage]
})
export class CatDepartamentosPageModule {}
