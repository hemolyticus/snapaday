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
      //Test Data
      this.photos=
          [

              new PhotoModel('http://placehold.it/100x100', new Date()),
              new PhotoModel('http://placehold.it/100x100', new Date()),
              new PhotoModel('http://placehold.it/100x100', new Date())
          ]

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

  takePhoto():any
  {

      if (!this.loaded || this.photoTaken)
      {

          return false;
      }

      if (!this.platform.is('cordova'))
      {

          console.log("You can only take photos on a device");
          return false;

      }


      let options =
          {
              quality: 100,
              destinationType: 1,
              sourceType: 1,
              encodingType: 0,
              cameraDirection: 1,
              saveToPhotoAlbum: true

          };

      Camera.getPicture(options).then
      (

          (imagePath) =>
          {

              let currentName =  imagePath.replace(/^.*[\\\/]/, '');


              let d  = new Date(),
                  n = d.getTime(),
                  newFileName = n + ".jpg";


              if (this.platform.is('ios'))
              {

                  var moveFile =
                      File.moveFile(cordova.file.tempDirectory, currentName, cordova.file.dataDirectory, newFileName)
                          .then((success:any) =>
                              {

                                  this.photoTaken = true;
                                  this.createPhoto(success.nativeURL);
                                  this.sharePhoto(success.nativeURL);

                              },

                              (err) =>

                              {

                                  console.log(err);
                                  let alert = this.simpleAlert.createAlert('Oops', 'Something went wrong');
                                  alert.present();

                              }

                          );
              }
              else
              {

                  this.photoTaken = true;
                  this.createPhoto(imagePath);
                  this.sharePhoto(imagePath);
              }

          },

          (err) =>
          {

              let alert = this.simpleAlert.createAlert('Oops','Something went wrong');
              alert.present();

          }


      );




  }

  createPhoto(photo):void
  {

      let newPhoto = new PhotoModel(photo, new Date());
      this.photos.unshift(newPhoto);
      this.save();



  }

  removePhoto(photo): void
  {

      let today = new Date();

      if (photo.date.setHours(0,0,0,0) === today.setHours(0,0,0,0))
      {

          this.photoTaken=false;

      }

      let index = this.photos.indexOf(photo);


      if (index > -1)
      {

          this.photos.splice(index, 1);
          this.save();

      }


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
