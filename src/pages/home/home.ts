import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewProjectPage } from "../new-project/new-project";
import { NewPagePage } from "../new-page/new-page";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  newProject: any;
  newPage: any;

  constructor(public navCtrl: NavController) {
    this.newProject = NewProjectPage;
    this.newPage = NewPagePage;
  }

}
