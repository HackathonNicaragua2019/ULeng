import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DepoBeisbolPage } from './depo-beisbol.page';

const routes: Routes = [
  {
    path: '',
    component: DepoBeisbolPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DepoBeisbolPage]
})
export class DepoBeisbolPageModule {}
