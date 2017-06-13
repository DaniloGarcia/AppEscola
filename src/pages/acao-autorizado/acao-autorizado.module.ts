import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcaoAutorizadoPage } from './acao-autorizado';

@NgModule({
  declarations: [
    AcaoAutorizadoPage,
  ],
  imports: [
    IonicPageModule.forChild(AcaoAutorizadoPage),
  ],
  exports: [
    AcaoAutorizadoPage
  ]
})
export class AcaoAutorizadoPageModule {}
