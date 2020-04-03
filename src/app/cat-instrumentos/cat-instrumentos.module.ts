import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CatInstrumentosPage } from './cat-instrumentos.page';

const routes: Routes = [
  {
    path: '',
    component: CatInstrumentosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CatInstrumentosPage]
})
export class CatInstrumentosPageModule {}
