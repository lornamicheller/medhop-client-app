import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})

export class ServicePage implements OnInit {

  constructor(public navigate: NavController, public nativePageTransitions: NativePageTransitions) {}

  ngOnInit() {}

  openPage() {

      let options: NativeTransitionOptions= {
          direction: 'left', duration: 400, slowdownfactor: -1, slidePixels: 20, iosdelay: 100
      }
      console.log(options);
      this.nativePageTransitions.slide(options);
      this.navigate.navigateRoot("/basic-service");
  }

  openPage2() {
    
    let options: NativeTransitionOptions= {
        direction: 'left', duration: 400, slowdownfactor: -1, slidePixels: 20, iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.slide(options);
    this.navigate.navigateRoot("/medication");
}

  openPage3() {
      
    let options: NativeTransitionOptions= {
        direction: 'left', duration: 400, slowdownfactor: -1, slidePixels: 20, iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.slide(options);
    this.navigate.navigateRoot("/suture");
  }

  openPage4() {
      
    let options: NativeTransitionOptions= {
        direction: 'left', duration: 400, slowdownfactor: -1, slidePixels: 20, iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.slide(options);
    this.navigate.navigateRoot("/hangover-kit");
  }
}
