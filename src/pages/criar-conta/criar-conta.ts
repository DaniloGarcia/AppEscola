import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { MenuPage } from '../menu/menu';

@IonicPage()
@Component({
  selector: 'page-criar-conta',
  templateUrl: 'criar-conta.html',
})
export class CriarContaPage {

  conta: any = {};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {
      this.conta = this.formBuilder.group({
        nome:['', Validators.required],
        email:['', Validators.required],
        senha:['', Validators.required],
        confSenha:['', Validators.required]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarContaPage');
  }

  fncCriarConta(){
    this.navCtrl.setRoot(MenuPage);
  }
  

}
