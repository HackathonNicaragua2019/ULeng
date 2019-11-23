import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComNacatamalPage } from './com-nacatamal.page';

const routes: Routes = [
  {
    path: '',
    component: ComNacatamalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComNacatamalPage]
})
export class ComNacatamalPageModule {}
