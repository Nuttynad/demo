import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';

import { BookmarksPage } from '../pages/bookmarks/bookmarks';
import { ApplicationsPage } from '../pages/applications/applications';
import { NotificationsPage } from '../pages/notifications/notifications';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav
  rootPage: any = HomePage
  pages: Array<{ name: string, component: any }>
  activePage: any

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp()

    this.pages = [
      { name: 'View Bookmarks', component: BookmarksPage },
      { name: 'Previous Applications', component: ApplicationsPage },
      { name: 'Notifications', component: NotificationsPage },
      { name: 'Logout', component: null }]

      this.activePage = HomePage
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    //this.viewCtrl.dismiss(page)
    this.nav.setRoot(page.component)
    this.activePage = page
  }

  checkActive(page) {
    return page == this.activePage
  }
}

