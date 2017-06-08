import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Home2Page } from '../pages/home2/home2';
import { TabHomePage } from '../pages/tab-home/tab-home';

import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { CriarContaPage } from '../pages/criar-conta/criar-conta';
import { EsqueciSenhaPage } from '../pages/esqueci-senha/esqueci-senha';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MenuPage,
    CriarContaPage,
    EsqueciSenhaPage,
    Home2Page,
    TabHomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MenuPage,
    CriarContaPage,
    EsqueciSenhaPage,
    Home2Page,
    TabHomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
