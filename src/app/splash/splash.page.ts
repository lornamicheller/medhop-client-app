import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(public NavCtrl : NavController) { }

  ngOnInit() {
    setTimeout(() => {this.goHome();},4200);
    console.log("working");
  }

  goHome() {
    this.NavCtrl.navigateRoot("/tutorial");
  }

}
