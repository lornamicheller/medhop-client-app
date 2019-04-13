import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HangoverKitPage } from './hangover-kit.page';

const routes: Routes = [
  {
    path: '',
    component: HangoverKitPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HangoverKitPage]
})
export class HangoverKitPageModule {}
