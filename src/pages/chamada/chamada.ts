import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-chamada',
  templateUrl: 'chamada.html',
})
export class ChamadaPage {

  listaChamada: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this.listaChamada = [
      {nome: "Luiz Felipe", codigo: "115125", serie: "08º B", status: "Chamada solicitada", urlFoto: "assets/img/marty-avatar.png" },
      {nome: "Laura Veraldo", codigo: "546152", serie: "05º A", status: "Não chamada", urlFoto: "assets/img/marty-avatar.png" },
    ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChamadaPage');
  }


  realizarChamar(chamada){
    console.log("Chamando...");
  }

  cancelarChamada(chamada){
    console.log("Cancelando...");
  }


}
