import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewProjectPage } from "../pages/new-project/new-project";
import { NewPagePage } from "../pages/new-page/new-page";
import { StartPage } from "../pages/start/start";
import { FeedAnalyserProvider } from '../providers/feed-analyser/feed-analyser';
import { MapperPage } from "../pages/mapper/mapper";
import { ImportPage } from "../pages/import/import";
import { SummaryPage } from "../pages/summary/summary";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NewProjectPage,
    NewPagePage,
    StartPage,
    MapperPage,
    ImportPage,
    SummaryPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NewProjectPage,
    NewPagePage,
    StartPage,
    MapperPage,
    ImportPage,
    SummaryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FeedAnalyserProvider
  ]
})
export class AppModule {}
