import { Injectable, Pipe } from '@angular/core';


@Pipe({
  name: 'days-ago'
})
@Injectable()
export class DaysAgo {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value, args?) {

      let now = new Date();
      let oneDay = 24 * 60 * 60 * 1000;
      let diffDays = Math.round(Math.abs((value.getTime() - now.getTime())/(oneDay)));

      return diffDays;
  }
}
