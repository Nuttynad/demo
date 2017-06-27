import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, MenuController, App } from 'ionic-angular';
import { PopoverPage } from '../../pages/popover/popover';
import { ChatBotService } from '../../providers/chat-bot-service';
import { DiscoverPage } from '../../pages/discover/discover';
import { MenuPage } from '../../pages/menu/menu';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  messages: any[]
  context: any
  sessionId: any
  userMsg: any

  constructor(public navCtrl: NavController,
    public navParam: NavParams,
    public popoverCtrl: PopoverController,
    public chatBotService: ChatBotService,
    public menuCtrl: MenuController,
    public appCtrl: App) {
    this.messages = [{ text: "Hello, I am mimoBot. Do you want to search for jobs or add a work experience?", type: "received" }]
    this.context = {}
    this.sessionId = (function () {
      var now = new Date()
      var enterDT = now.getFullYear() + now.getMonth() + now.getDate() + now.getTime()
      return enterDT
    })
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

  addMessage(text, type) { //adds message to chatInterface
    this.messages.push({
      text: text,
      type: type
    })
  }

  sendMessage() {
    let self = this;
    self.addMessage(this.userMsg, "sent")

    var request = {
      "userMsg": this.userMsg,
      "id": this.sessionId,
      "context": this.context
    }

    this.chatBotService.sendRequest(request)
      .then(function (result) {
        console.log(result.json());
        self.addMessage(result.json().botMessage, "received");
        self.context = result.json().context;
      })

    this.userMsg = null; //clear input
  }

  openMenu(myEvent) { //executes when the menu is tapped
    this.appCtrl.getRootNav().setRoot(MenuPage)
  }
}
