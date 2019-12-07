import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ColNaranjaPage } from './col-naranja.page';

const routes: Routes = [
  {
    path: '',
    component: ColNaranjaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ColNaranjaPage]
})
export class ColNaranjaPageModule {}
