import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComIndioviejoPage } from './com-indioviejo.page';

const routes: Routes = [
  {
    path: '',
    component: ComIndioviejoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComIndioviejoPage]
})
export class ComIndioviejoPageModule {}
