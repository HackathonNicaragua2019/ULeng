import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalHastaprontoPage } from './sal-hastapronto.page';

const routes: Routes = [
  {
    path: '',
    component: SalHastaprontoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalHastaprontoPage]
})
export class SalHastaprontoPageModule {}
