import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PopoverPage } from '../pages/popover/popover';
import { DiscoverPage } from '../pages/discover/discover';
import { ProfilePage} from '../pages/profile/profile';
import { WorkExperiencePage } from '../pages/workexperience/workexperience';
import { UploadResumePage } from '../pages/uploadresume/uploadresume';
import { BookmarksPage } from '../pages/bookmarks/bookmarks';
import { ApplicationsPage } from '../pages/applications/applications';
import { NotificationsPage } from '../pages/notifications/notifications';
import { ChatPage } from '../pages/chat/chat';
import { MenuPage } from '../pages/menu/menu';

import { AppGlobals } from '../global';
import { ChatBotService } from '../providers/chat-bot-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
    PopoverPage,
    DiscoverPage,
    ProfilePage,
    WorkExperiencePage,
    UploadResumePage,
    BookmarksPage,
    NotificationsPage,
    ApplicationsPage,
    MenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage,
    PopoverPage,
    DiscoverPage,
    ProfilePage,
    WorkExperiencePage,
    UploadResumePage,
    BookmarksPage,
    NotificationsPage,
    ApplicationsPage,
    MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppGlobals,
    ChatBotService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
