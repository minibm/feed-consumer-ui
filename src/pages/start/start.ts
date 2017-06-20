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
    console.log(url);
    this.feedProvider.analyseFeed(url);

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.navCtrl.push(MapperPage, { url: url });
    }, 1000);

  }

}
