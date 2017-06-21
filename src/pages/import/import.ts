import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SummaryPage } from "../summary/summary";
import { FeedAnalyserProvider } from "../../providers/feed-analyser/feed-analyser";

/**
 * Generated class for the ImportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-import',
  templateUrl: 'import.html',
})
export class ImportPage {

  doc: any;
  content: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public feedService: FeedAnalyserProvider) {
    this.doc = navParams.get("doc");
    this.content = JSON.stringify(navParams.get("content"), null, ' ');
    console.dir(this);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImportPage');
  }

  public startImport() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.feedService.importContents(this.doc).subscribe(res => {
      loading.dismiss();
      this.navCtrl.push(SummaryPage, {contentNumber: res.json().imported });
    }, err => {
      loading.dismiss();
    })
  }
}
