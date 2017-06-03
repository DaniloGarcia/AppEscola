import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EsqueciSenhaPage } from './esqueci-senha';

@NgModule({
  declarations: [
    EsqueciSenhaPage,
  ],
  imports: [
    IonicPageModule.forChild(EsqueciSenhaPage),
  ],
  exports: [
    EsqueciSenhaPage
  ]
})
export class EsqueciSenhaPageModule {}
