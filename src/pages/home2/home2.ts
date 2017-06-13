import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdicionarLocalPage } from '../adicionar-local/adicionar-local';
import { OpcoesLocalPage } from '../opcoes-local/opcoes-local';


@IonicPage()
@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',
})
export class Home2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home2Page');
  }

  adicionarEscola(){
    this.navCtrl.push(AdicionarLocalPage);
  }

  entrarLocal() {
    this.navCtrl.push(OpcoesLocalPage);
  }

}
