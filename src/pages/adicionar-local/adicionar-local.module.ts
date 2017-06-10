import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarLocalPage } from './adicionar-local';

@NgModule({
  declarations: [
    AdicionarLocalPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarLocalPage),
  ],
  exports: [
    AdicionarLocalPage
  ]
})
export class AdicionarLocalPageModule {}
