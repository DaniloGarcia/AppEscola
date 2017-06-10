import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConectarLocalPage } from '../conectar-local/conectar-local';

@IonicPage()
@Component({
  selector: 'page-adicionar-local',
  templateUrl: 'adicionar-local.html',
})
export class AdicionarLocalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarLocalPage');
  }

  conectarLocal(){
    this.navCtrl.push(ConectarLocalPage);
  }

}
