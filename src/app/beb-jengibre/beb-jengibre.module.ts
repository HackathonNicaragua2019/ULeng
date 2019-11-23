import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BebJengibrePage } from './beb-jengibre.page';

const routes: Routes = [
  {
    path: '',
    component: BebJengibrePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BebJengibrePage]
})
export class BebJengibrePageModule {}
