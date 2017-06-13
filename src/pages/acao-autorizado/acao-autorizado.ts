import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AcaoAutorizadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-acao-autorizado',
  templateUrl: 'acao-autorizado.html',
})
export class AcaoAutorizadoPage {

  listaAcoesAutorizado: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.listaAcoesAutorizado = [
      {data: "17/05/2017 12:30:40", nome: "Luiz Felipe Costa Veraldo", periodo:"diurno", turma: "7º B" },
      {data: "18/05/2017 12:35:00", nome: "Luiz Felipe Costa Veraldo", periodo:"diurno", turma: "7º B" },
      {data: "19/05/2017 12:22:05", nome: "Luiz Felipe Costa Veraldo", periodo:"diurno", turma: "7º B" },
      {data: "20/05/2017 12:15:15", nome: "Luiz Felipe Costa Veraldo", periodo:"diurno", turma: "7º B" },
      {data: "21/05/2017 12:33:22", nome: "Luiz Felipe Costa Veraldo", periodo:"diurno", turma: "7º B" },
      {data: "22/05/2017 12:40:00", nome: "Luiz Felipe Costa Veraldo", periodo:"diurno", turma: "7º B" },
      {data: "22/05/2017 12:40:00", nome: "Pedro Paulo da Silva", periodo:"diurno", turma: "5º A" },
      {data: "23/05/2017 13:00:22", nome: "Luiz Felipe Costa Veraldo", periodo:"diurno", turma: "7º B" }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcaoAutorizadoPage');
  }

}
