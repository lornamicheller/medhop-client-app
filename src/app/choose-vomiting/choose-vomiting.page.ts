import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-choose-vomiting',
  templateUrl: './choose-vomiting.page.html',
  styleUrls: ['./choose-vomiting.page.scss'],
})
export class ChooseVomitingPage implements OnInit {

  constructor(public navigate: NavController, public nativePageTransitions: NativePageTransitions, public alertController: AlertController) { }

  ngOnInit() {
  }

  openPage() {
    let options: NativeTransitionOptions= {
        direction: 'left', 
        duration: 400, 
        slowdownfactor: -1, 
        slidePixels: 20, 
        iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.slide(options);
}

    openPage2() {
        let options: NativeTransitionOptions= {
            direction: 'left', 
            duration: 400, 
            slowdownfactor: -1, 
            slidePixels: 20, 
            iosdelay: 100
        }
        console.log(options);
        this.nativePageTransitions.slide(options);
        this.navigate.navigateRoot("/complete");
}

goBack() {

    let options: NativeTransitionOptions= {
        direction: 'right', 
        duration: 400, 
        slowdownfactor: -1, 
        slidePixels: 20, 
        iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.slide(options);
    this.navigate.navigateRoot("/symptoms");
  }

async presentAlert() {
    const alert=await this.alertController.create( {
        header: 'Alert', message: 'Go to the nearest hospital', buttons: [ {
            text: 'Ok', handler: () => {
                console.log('Confirm Cancel');
                this.openPage();
                this.navigate.navigateRoot('/service');
            }
        }
        ]
    }
    );
    await alert.present();
}

}
