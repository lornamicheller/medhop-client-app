import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from "@ionic/angular";


@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  constructor(private nativePageTransitions: NativePageTransitions, public navigate : NavController) { }

  ngOnInit() {
  }

  openPage() {

    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      slidePixels: 20,
      iosdelay: 100
     }

     console.log(options);
    this.nativePageTransitions.slide(options);
    this.navigate.navigateRoot("/login");
  
  }

  openPage2() {

    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      slidePixels: 20,
      iosdelay: 100
     }

     console.log(options);
    this.nativePageTransitions.slide(options);
    this.navigate.navigateRoot("/signup");

  }

  // goBack() {

  //   let options: NativeTransitionOptions = {
  //     direction: 'right',
  //     duration: 400,
  //     slowdownfactor: -1,
  //     slidePixels: 20,
  //     iosdelay: 100
  //    }

  //    console.log(options);
  //   this.nativePageTransitions.slide(options);
  //   this.navigate.navigateRoot("/signup");
  // }

}
