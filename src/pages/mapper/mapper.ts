import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ImportPage } from "../import/import";
import { FeedAnalyserProvider } from "../../providers/feed-analyser/feed-analyser";

/**
 * Generated class for the MapperPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mapper',
  templateUrl: 'mapper.html',
})
export class MapperPage {
   firstLevelField: String[];
   descField: string;
   titleField: string;

   flattenList: any;

   flattenObject: any;

   rawDoc: any;

   summaryString: string;

   typeName: string;

   constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public feedService: FeedAnalyserProvider) {
    let doc = navParams.get("doc");

    this.firstLevelField = Object.keys(doc.sample);
    this.rawDoc = doc;
    this.summaryString = JSON.stringify(doc.sample, null, ' ');
    this.flattenObject = flatten(doc.sample);
    this.flattenList = Object.keys(this.flattenObject).map( key => {
      return {key: key, value: this.flattenObject[key]};
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapperPage');
  }

  public saveMapping() {
    console.log(this);

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.rawDoc.sample = this.flattenObject;
    this.rawDoc.typeName = this.typeName;
    this.feedService.generateType(this.rawDoc).subscribe( res => {
      loading.dismiss();
      this.navCtrl.push(ImportPage, {doc: res.json(), content: res.json().previewContent});
      // this.feedService.importContents(res.json()).subscribe( res => {
      //   loading.dismiss();
      //   this.navCtrl.push(ImportPage);
      // })
    }, err => {
      loading.dismiss();

    });
  }
  public onChange(key, value) {
    console.log(key);
    console.log(this.flattenObject[key]);
    console.log(value);

    this.flattenObject[key] = value;

    console.dir(this.flattenObject);
  }

  public getFirstLevelField(doc) {
    Object.keys(doc)
  }
}

function flatten(target, opts?) {
  opts = opts || {}

  var delimiter = opts.delimiter || '.'
  var maxDepth = opts.maxDepth
  var output = {}

  function step(object, prev?, currentDepth?) {
    currentDepth = currentDepth ? currentDepth : 1
    Object.keys(object).forEach(function (key) {
      var value = object[key]
      var isarray = opts.safe && Array.isArray(value)
      var type = Object.prototype.toString.call(value)
      var isbuffer = isBuffer(value)
      var isobject = (
        type === "[object Object]" ||
        type === "[object Array]"
      )

      var newKey = prev
        ? prev + delimiter + key
        : key

      if (!isarray && !isbuffer && isobject && Object.keys(value).length &&
        (!opts.maxDepth || currentDepth < maxDepth)) {
        return step(value, newKey, currentDepth + 1)
      }

      output[newKey] = value
    })
  }

  step(target)

  return output
}
function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}
