import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the DaysAgo pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'days-ago'
})
@Injectable()
export class DaysAgo {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value, args) {
    value = value + ''; // make sure it's a string
    return value.toLowerCase();
  }
}
