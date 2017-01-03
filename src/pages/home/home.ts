import { Component } from '@angular/core';
import {ModalController, NavController, Platform, AlertController} from 'ionic-angular';
import { PhotoModel } from '../../models/photo-model';
import { SimpleAlert } from '../../providers/simple-alert';
import { SlideshowPage} from '../slideshow/slideshow';
import { Data } from '../../providers/data'
import { Camera, File } from 'ionic-native';

declare var cordova;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    //Variables
    loaded: boolean =false;
    photoTaken: boolean =false;
    photos: PhotoModel[]= [];

    //Constructor
  constructor(public dataService:Data, public platform: Platform, public simpleAlert: SimpleAlert,
  public modalCtrl:ModalController, public alertCtrl:AlertController)
  {
    
  }

  ionViewDidLoad()
  {
      this.platform.ready().then(()=>
      {
          this.loadPhotos();
      });

      document.addEventListener('resume', () =>
      {

          if (this.photos.length >0)
          {

              let today = new Date();

              if (this.photos[0].date.setHours(0,0,0,0)=== today.setHours(0,0,0,0))
              {
                  this.photoTaken= true;
              }
              else
              {

                  this.photoTaken=false;
              }
          }

      }, false);
  }

  loadPhotos():void
  {


  }

  takePhoto():void
  {


  }

  createPhoto(photo):void
  {



  }

  removePhoto(photo): void
  {



  }

  playSlideshow(): void
  {


  }

  sharePhoto(image):void
  {


  }

  save(): void
  {


  }

}
