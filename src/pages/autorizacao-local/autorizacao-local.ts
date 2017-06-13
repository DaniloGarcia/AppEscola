import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AutorizacaoLocalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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

}
