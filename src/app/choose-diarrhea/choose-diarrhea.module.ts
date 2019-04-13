import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChooseDiarrheaPage } from './choose-diarrhea.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseDiarrheaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChooseDiarrheaPage]
})
export class ChooseDiarrheaPageModule {}
