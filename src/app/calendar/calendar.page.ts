import { Component, OnInit } from '@angular/core';
import { CalendarComponent } from "./../calendar/calendar.component";
import { ModalController } from '@ionic/angular';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  datePickerObjPtBr: any;
  selectedDate: any;

  constructor(public modalCtrl: ModalController, public navigate: NavController, public nativePageTransitions: NativePageTransitions) { }

  ngOnInit() {
  }

  async openDatePicker() {
    const datePickerModal=await this.modalCtrl.create( {
        component: CalendarComponent, //cssClass: 'li-ionic4-datePicker',
        //componentProps: { 'objConfig': this.datePickerObjPtBr }
    }
    );
    await datePickerModal.present();
    // datePickerModal.onDidDismiss()
    //   .then((data) => {
    //     // this.isModalOpen = false;
    //     console.log(data);
    //     this.selectedDate = data.data.date;
    //   });
}

openPage() {

  let options: NativeTransitionOptions= {
      direction: 'left', duration: 400, slowdownfactor: -1, slidePixels: 20, iosdelay: 100
  }
  console.log(options);
  this.nativePageTransitions.slide(options);
  this.navigate.navigateRoot("/service");
}

goBack() {

  let options: NativeTransitionOptions= {
      direction: 'right', duration: 400, slowdownfactor: -1, slidePixels: 20, iosdelay: 100
  }
  console.log(options);
  this.nativePageTransitions.slide(options);
  this.navigate.navigateRoot("/account");
}

}
