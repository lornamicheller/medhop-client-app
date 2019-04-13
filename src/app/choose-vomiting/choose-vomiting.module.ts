import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChooseVomitingPage } from './choose-vomiting.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseVomitingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChooseVomitingPage]
})
export class ChooseVomitingPageModule {}
