import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComGallopintoPage } from './com-gallopinto.page';

const routes: Routes = [
  {
    path: '',
    component: ComGallopintoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComGallopintoPage]
})
export class ComGallopintoPageModule {}
