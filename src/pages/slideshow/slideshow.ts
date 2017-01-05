import { ViewController, NavParams } from 'ionic-angular';
import { Component, ElementRef, ViewChild} from '@angular/core';


@Component({
  selector: 'page-slideshow',
  templateUrl: 'slideshow.html'
})
export class SlideshowPage {

    //Variables
    @ViewChild('imagePlayer') imagePlayer: ElementRef;
    imagePlayerInterval:any;
    photos:any;

    //Constructor

  constructor(public navParams: NavParams, public viewCtrl: ViewController)
  {

      this.photos= this.navParams.get('photos');


  }

  ionViewDidEnter() {
    this.playPhotos();
  }

  closeModal()
  {

      this.viewCtrl.dismiss();

  }


  playPhotos()
  {

      let imagePlayer = this. imagePlayer.nativeElement;
      let i = 0;


      clearInterval(this.imagePlayerInterval);

      this.imagePlayerInterval = setInterval(() =>
      {

          if (i<this.photos.length)
          {
              imagePlayer.src = this.photos[i].image;
              i++;
          }
          else
          {

              clearInterval(this.imagePlayerInterval);

          }

      }, 500);

  }

}
