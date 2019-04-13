import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-choose-vomiting',
  templateUrl: './choose-vomiting.page.html',
  styleUrls: ['./choose-vomiting.page.scss'],
})
export class ChooseVomitingPage implements OnInit {

  constructor(public alertController: AlertController, public navigate : NavController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Dirijase al hospital mas cercano.',
      buttons: ['OK']
    });

    console.log('is working');

    await alert.present();
    this.navigate.navigateRoot("/service");
  }

}
