import { NgModule, ErrorHandler } from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler, Slide} from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { DaysAgo } from '../pipes/days-ago';
import { SlideshowPage } from '../pages/slideshow/slideshow';
import { SimpleAlert } from '../providers/simple-alert';
import { Data } from '../providers/data';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
      SlideshowPage,
      DaysAgo
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
      SlideshowPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage, Data, SimpleAlert]
})
export class AppModule {}
