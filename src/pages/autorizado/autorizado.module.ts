import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AutorizadoPage } from './autorizado';

@NgModule({
  declarations: [
    AutorizadoPage,
  ],
  imports: [
    IonicPageModule.forChild(AutorizadoPage),
  ],
  exports: [
    AutorizadoPage
  ]
})
export class AutorizadoPageModule {}
