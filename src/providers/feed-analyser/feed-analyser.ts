import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FeedAnalyserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FeedAnalyserProvider {

  constructor(public http: Http) {
    console.log('Hello FeedAnalyserProvider Provider');
  }

  analyseFeed(url: string) {
    this.http.get(url).subscribe(res => {
      console.log(res);
    }, err => {
      console.error(err);
    });
  }

}
