import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpcoesLocalPage } from './opcoes-local';

@NgModule({
  declarations: [
    OpcoesLocalPage,
  ],
  imports: [
    IonicPageModule.forChild(OpcoesLocalPage),
  ],
  exports: [
    OpcoesLocalPage
  ]
})
export class OpcoesLocalPageModule {}
