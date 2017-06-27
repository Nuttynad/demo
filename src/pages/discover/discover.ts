import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, PopoverController, App } from 'ionic-angular';
import { MenuPage } from '../../pages/menu/menu';
import { PopoverPage } from '../../pages/popover/popover';
import { BookmarksPage } from '../../pages/bookmarks/bookmarks';
import { JobdescriptionPage } from '../../pages/jobdescription/jobdescription';
 
@IonicPage()
@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html',
})
export class DiscoverPage {

  constructor(public navCtrl: NavController,
   public navParams: NavParams,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public appCtrl: App ) {
     this.jobs = [{
      jobTitle:  "ABC",
      jobDescription: "We are seeking a Marketing Manager to be based in Singapore (Changi Business Park Area) who will be responsible for marketing activities for the ASEAN region plus Hong Kong, Taiwan and India."
    }, {
      jobTitle:  "ABC2",
      jobDescription: "2We are seeking a Marketing Manager to be based in Singapore (Changi Business Park Area) who will be responsible for marketing activities for the ASEAN region plus Hong Kong, Taiwan and India.",

    }, {
      jobTitle:  "ABC3",
      jobDescription: "3We are seeking a Marketing Manager to be based in Singapore (Changi Business Park Area) who will be responsible for marketing activities for the ASEAN region plus Hong Kong, Taiwan and India.",

    }]
  }
jobs = []

  ionViewDidLoad() {
    console.log('ionViewDidLoad Discover');
  }

  passingdataTrial(){
  console.log("hello");
}
  openPopover(myEvent) { //executes when the fabButton is tapped
    let popover = this.popoverCtrl.create(PopoverPage)

    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss((popoverData) => {
      console.log(popoverData)
    })
  }

    openMenu(myEvent) { //executes when the menu is tapped
    this.appCtrl.getRootNav().setRoot(MenuPage)
  }

showBookmarkPage(){
  this.navCtrl.push(BookmarksPage);
}

navigate(){
  this.navCtrl.push(BookmarksPage, {
    firstPassed: this.jobs
  })
}

 try(){
    this.navCtrl.push(JobdescriptionPage, {
      param1: this.jobs
    });
  }


}
