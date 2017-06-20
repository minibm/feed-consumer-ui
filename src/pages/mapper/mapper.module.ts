import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapperPage } from './mapper';

@NgModule({
  declarations: [
    MapperPage,
  ],
  imports: [
    IonicPageModule.forChild(MapperPage),
  ],
  exports: [
    MapperPage
  ]
})
export class MapperPageModule {}
