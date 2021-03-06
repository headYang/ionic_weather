import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city: string;
  state: string;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private storage: Storage) {
       this.storage.get('location').then((val) => {
         if(val) {
           let location = val;
           this.city = location.city;
           this.state = location.state;
         } else {
           this.city = 'Miami';
           this.state = 'FL';
         }
       })
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm() {
    let location = {
      city: this.city,
      state: this.state
    };
    this.storage.set('location',location);
  }

}
