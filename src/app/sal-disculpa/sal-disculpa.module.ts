import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalDisculpaPage } from './sal-disculpa.page';

const routes: Routes = [
  {
    path: '',
    component: SalDisculpaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalDisculpaPage]
})
export class SalDisculpaPageModule {}
