import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App } from 'ionic-angular';

import { BookmarksPage } from '../../pages/bookmarks/bookmarks';
import { ApplicationsPage } from '../../pages/applications/applications';
import { NotificationsPage } from '../../pages/notifications/notifications';
import { ChatPage } from '../../pages/chat/chat';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})

export class MenuPage {
  popoverItemList = [{ name: 'View Bookmarks', component: BookmarksPage },
  { name: 'Previous Applications', component: ApplicationsPage },
  { name: 'Notifications', component: NotificationsPage },
  { name: 'Logout', component: null }];

  private rootPage
  selectedItem: string

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public appCtrl: App) {
    this.selectedItem = " "
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Menu');
  }

  openPage(item) {
    this.selectedItem = item
    console.log(item)
    this.rootPage = item.component
    this.viewCtrl.dismiss(this.selectedItem)
    this.appCtrl.getRootNav().setRoot(this.rootPage)
  }
}
