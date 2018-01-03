import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import { Camera } from '@ionic-native/camera';
import {AppRoutingModule}     from './router/index';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import { ZBar } from '@ionic-native/zbar';
import { HomeComponent }      from './page/home/index';
import {ScannerComponent} from "./page/scanner/index";

@NgModule({
	declarations: [
		MyApp,
		HomeComponent,
		ScannerComponent
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		AppRoutingModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
	],
	providers: [
		StatusBar,
		SplashScreen,
		Camera,ZBar,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
	]
})
export class AppModule {
}
