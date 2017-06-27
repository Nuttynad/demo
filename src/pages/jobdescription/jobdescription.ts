import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiscoverPage } from "../../pages/discover/discover";

/**
 * Generated class for the JobdescriptionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-jobdescription',
  templateUrl: 'jobdescription.html',
})
export class JobdescriptionPage {
  parameter1: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.parameter1 = navParams.get('param1');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobdescriptionPage');
  }

 

}
