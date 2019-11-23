import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComChanyucaPage } from './com-chanyuca.page';

const routes: Routes = [
  {
    path: '',
    component: ComChanyucaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComChanyucaPage]
})
export class ComChanyucaPageModule {}
