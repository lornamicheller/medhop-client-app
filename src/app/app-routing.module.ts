import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tutorial',
    pathMatch: 'full'
  },
  {
    path: 'tutorial',
    loadChildren: './tutorial/tutorial.module#TutorialPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'account', loadChildren: './account/account.module#AccountPageModule' },
  { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule' },
  { path: 'service', loadChildren: './service/service.module#ServicePageModule' },
  { path: 'modal-calendar', loadChildren: './modal-calendar/modal-calendar.module#ModalCalendarPageModule' },
  { path: 'basic-service', loadChildren: './basic-service/basic-service.module#BasicServicePageModule' },
  { path: 'consult', loadChildren: './consult/consult.module#ConsultPageModule' },
  { path: 'call-request', loadChildren: './call-request/call-request.module#CallRequestPageModule' },
  { path: 'medication', loadChildren: './medication/medication.module#MedicationPageModule' },
  { path: 'complete', loadChildren: './complete/complete.module#CompletePageModule' },
  { path: 'suture', loadChildren: './suture/suture.module#SuturePageModule' },
  { path: 'suture-continue', loadChildren: './suture-continue/suture-continue.module#SutureContinuePageModule' },
  { path: 'body-parts', loadChildren: './body-parts/body-parts.module#BodyPartsPageModule' },
  { path: 'suture-note', loadChildren: './suture-note/suture-note.module#SutureNotePageModule' },
  { path: 'camera', loadChildren: './camera/camera.module#CameraPageModule' },
  { path: 'hangover-kit', loadChildren: './hangover-kit/hangover-kit.module#HangoverKitPageModule' },
  { path: 'symptoms', loadChildren: './symptoms/symptoms.module#SymptomsPageModule' },
  { path: 'choose-vomiting', loadChildren: './choose-vomiting/choose-vomiting.module#ChooseVomitingPageModule' },
  { path: 'choose-diarrhea', loadChildren: './choose-diarrhea/choose-diarrhea.module#ChooseDiarrheaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
