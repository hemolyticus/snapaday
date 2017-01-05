import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { LocalNotifications } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import {first} from "rxjs/operator/first";


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {

        if (platform.is('cordova')) {

            LocalNotifications.isScheduled(1).then((scheduled) =>{

            if (!scheduled) {

                let firstNotificationTime = new Date();
                firstNotificationTime.setHours(firstNotificationTime.getHours() + 24);


                LocalNotifications.schedule
                (
                    {
                        id: 1,
                        title: 'Snapaday',
                        text: 'Have you take your snap today',
                        at: firstNotificationTime,
                        every: 'day'
                    }

                );
            }

    }
    );
  }
});
}
}


