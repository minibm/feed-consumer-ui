import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewProjectPage } from "../new-project/new-project";
import { NewPagePage } from "../new-page/new-page";
import { StartPage } from "../start/start";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  newProject: any;
  newPage: any;
  startPage:any;

  constructor(public navCtrl: NavController) {
    this.newProject = NewProjectPage;
    this.newPage = NewPagePage;
    this.startPage = StartPage;
  }

}
