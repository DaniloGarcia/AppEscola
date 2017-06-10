import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConectarLocalPage } from './conectar-local';

@NgModule({
  declarations: [
    ConectarLocalPage,
  ],
  imports: [
    IonicPageModule.forChild(ConectarLocalPage),
  ],
  exports: [
    ConectarLocalPage
  ]
})
export class ConectarLocalPageModule {}
