import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';


@Component({
  selector: 'app-consult',
  templateUrl: './consult.page.html',
  styleUrls: ['./consult.page.scss'],
})
export class ConsultPage implements OnInit {

  constructor(public navigate: NavController, public nativePageTransitions: NativePageTransitions) { }

  ngOnInit() {
  }

  openPage() {

    let options: NativeTransitionOptions= {
        direction: 'left', duration: 400, slowdownfactor: -1, slidePixels: 20, iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.slide(options);
    this.navigate.navigateRoot("/call-request");
}

  openPage2() {

    let options: NativeTransitionOptions= {
        direction: 'left', duration: 400, slowdownfactor: -1, slidePixels: 20, iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.slide(options);
    this.navigate.navigateRoot("/call-request");
  }

  goBack() {

    let options: NativeTransitionOptions= {
        direction: 'right', duration: 400, slowdownfactor: -1, slidePixels: 20, iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.slide(options);
    this.navigate.navigateRoot("/basic-service");
  }

}
