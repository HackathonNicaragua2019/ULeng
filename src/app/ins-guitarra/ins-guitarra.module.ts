import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InsGuitarraPage } from './ins-guitarra.page';

const routes: Routes = [
  {
    path: '',
    component: InsGuitarraPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InsGuitarraPage]
})
export class InsGuitarraPageModule {}
