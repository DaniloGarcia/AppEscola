import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AutorizadoPage } from '../autorizado/autorizado';
import { AcaoAutorizadoPage } from '../acao-autorizado/acao-autorizado';

@IonicPage()
@Component({
  selector: 'page-autorizacao-local',
  templateUrl: 'autorizacao-local.html',
})
export class AutorizacaoLocalPage {

  listaAutorizacoes: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.listaAutorizacoes = [
      {nome: "Claúdio Dantas", parentesco: "3", parentescoDsc: "Tio",   tipoDoc: 2, documento: "01688899978",  temporaria: true,  vencimento: "10/06/2017", corTipo: "vermelho", urlFoto: "assets/img/marty-avatar.png" },
      {nome: "Pedro Lemos II", parentesco: "2", parentescoDsc: "Primo", tipoDoc: 2, documento: "01577799988",  temporaria: false, corTipo: "azul", urlFoto: "assets/img/marty-avatar.png" },
    ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutorizacaoLocalPage');
  }

  alterarAutorizado(autorizado){
    this.navCtrl.push(AutorizadoPage,{params: autorizado});
  }

  acoesRealizadas(autorizado){
    this.navCtrl.push(AcaoAutorizadoPage);
  }

  adicionarAutorizado(){
    this.navCtrl.push(AutorizadoPage);
  }

}
