import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalBuenosdiasPage } from './sal-buenosdias.page';

const routes: Routes = [
  {
    path: '',
    component: SalBuenosdiasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalBuenosdiasPage]
})
export class SalBuenosdiasPageModule {}
