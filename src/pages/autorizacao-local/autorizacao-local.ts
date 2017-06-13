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
      {nome: "Claúdio Dantas", parentesco: "Tio", cpf: "016.888.999-78",    tipo:"Temporária", corTipo: "vermelho", urlFoto: "assets/img/marty-avatar.png" },
      {nome: "Pedro Lemos II", parentesco: "Primo", cpf: "015.777.999-78",  tipo:"Temporária", corTipo: "vermelho", urlFoto: "assets/img/marty-avatar.png" },
      {nome: "José Maria da Silva", parentesco: "Tio", cpf: "016.888.999-78",    tipo:"Permanente", corTipo: "black", urlFoto: "assets/img/marty-avatar.png" }
    ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutorizacaoLocalPage');
  }

  alterarAutorizado(autorizado){
    this.navCtrl.push(AutorizadoPage);
  }

  acoesRealizadas(autorizado){
    this.navCtrl.push(AcaoAutorizadoPage);
  }

}
