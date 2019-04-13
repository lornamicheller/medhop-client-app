import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SutureContinuePage } from './suture-continue.page';

const routes: Routes = [
  {
    path: '',
    component: SutureContinuePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SutureContinuePage]
})
export class SutureContinuePageModule {}
