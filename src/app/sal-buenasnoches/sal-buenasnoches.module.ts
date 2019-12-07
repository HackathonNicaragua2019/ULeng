import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalBuenasnochesPage } from './sal-buenasnoches.page';

const routes: Routes = [
  {
    path: '',
    component: SalBuenasnochesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalBuenasnochesPage]
})
export class SalBuenasnochesPageModule {}
