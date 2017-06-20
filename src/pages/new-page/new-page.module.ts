import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPagePage } from './new-page';

@NgModule({
  declarations: [
    NewPagePage,
  ],
  imports: [
    IonicPageModule.forChild(NewPagePage),
  ],
  exports: [
    NewPagePage
  ]
})
export class NewPagePageModule {}
