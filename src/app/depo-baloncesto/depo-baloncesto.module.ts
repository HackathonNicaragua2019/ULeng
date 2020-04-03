import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DepoBaloncestoPage } from './depo-baloncesto.page';

const routes: Routes = [
  {
    path: '',
    component: DepoBaloncestoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DepoBaloncestoPage]
})
export class DepoBaloncestoPageModule {}
