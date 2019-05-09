import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(public navigate: NavController, public nativePageTransitions: NativePageTransitions) { }

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
    // console.log(options);
    this.nativePageTransitions.slide(options);
    this.navigate.navigateRoot("/calendar");
}

goBack() {

  let options: NativeTransitionOptions= {
      direction: 'right', duration: 400, slowdownfactor: -1, slidePixels: 20, iosdelay: 100
  }
  console.log(options);
  this.nativePageTransitions.slide(options);
  this.navigate.navigateRoot("/signup");
}

}
