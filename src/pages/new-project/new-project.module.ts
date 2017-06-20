import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewProjectPage } from './new-project';

@NgModule({
  declarations: [
    NewProjectPage,
  ],
  imports: [
    IonicPageModule.forChild(NewProjectPage),
  ],
  exports: [
    NewProjectPage
  ]
})
export class NewProjectPageModule {}
