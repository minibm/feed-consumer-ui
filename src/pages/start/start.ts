import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FeedAnalyserProvider } from "../../providers/feed-analyser/feed-analyser";
import { MapperPage } from "../mapper/mapper";

/**
 * Generated class for the StartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public feedProvider: FeedAnalyserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }

  analyseFeed(url) {
    let doc;
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.feedProvider.analyseFeed(url).subscribe(res => {
      loading.dismiss();
      doc = res.json();
      this.navCtrl.push(MapperPage, { doc: doc });
    }, err => {
      console.error(err);
    });;
  }

}
