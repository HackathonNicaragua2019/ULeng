import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalBuenastardesPage } from './sal-buenastardes.page';

const routes: Routes = [
  {
    path: '',
    component: SalBuenastardesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalBuenastardesPage]
})
export class SalBuenastardesPageModule {}
