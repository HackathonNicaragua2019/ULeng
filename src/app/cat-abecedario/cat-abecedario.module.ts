import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CatAbecedarioPage } from './cat-abecedario.page';

const routes: Routes = [
  {
    path: '',
    component: CatAbecedarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CatAbecedarioPage]
})
export class CatAbecedarioPageModule {}
