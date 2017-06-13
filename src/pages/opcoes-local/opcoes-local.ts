import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AutorizacaoLocalPage } from '../autorizacao-local/autorizacao-local';

/**
 * Generated class for the OpcoesLocalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-opcoes-local',
  templateUrl: 'opcoes-local.html',
})
export class OpcoesLocalPage {

  opcoesLocal: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.opcoesLocal = [
      {nome: "Controle de autorizações", tela: "AutorizacaoLocalPage"},
      {nome: "Chamada", tela: "ChamadaLocalPage"}
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpcoesLocalPage');
  }

  opcaoSelecionada(opcao) {
    this.navCtrl.push(opcao);
  }

}
