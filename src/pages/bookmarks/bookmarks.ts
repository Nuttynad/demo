import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiscoverPage } from '../../pages/discover/discover';

/**
 * Generated class for the Bookmarks page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-bookmarks',
  templateUrl: 'bookmarks.html',
})
export class BookmarksPage {
 public firstParam;
 public secondParam;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.firstParam = navParams.get('firstPassed');
    this.secondParam = navParams.get('secondParams');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bookmarks');
  }

}
