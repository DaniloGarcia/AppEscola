import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AutorizacaoLocalPage } from './autorizacao-local';

@NgModule({
  declarations: [
    AutorizacaoLocalPage,
  ],
  imports: [
    IonicPageModule.forChild(AutorizacaoLocalPage),
  ],
  exports: [
    AutorizacaoLocalPage
  ]
})
export class AutorizacaoLocalPageModule {}
