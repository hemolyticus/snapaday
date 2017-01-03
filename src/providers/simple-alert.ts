import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';



@Injectable()
export class SimpleAlert {

    //Constructor
    constructor(public alertCtrl: AlertController)
    {

    }


    //Function
    createAlert(title:string, message:string):any
    {
        return this.alertCtrl.create
        (
            {
                title: title,
                message: message,
                buttons:
                [
                    {
                        text: 'Ok'
                    }
                ]
            }
        );
    }

}
