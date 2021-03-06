import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { MenuPage } from '../menu/menu';
import { CriarContaPage } from '../criar-conta/criar-conta';
import { EsqueciSenhaPage } from '../esqueci-senha/esqueci-senha';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login: any = {};
  email : any;
  boTpHidden : any = 0;
  criarContaPage: any =  CriarContaPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public menuCtrl: MenuController) {

    this.menuCtrl.enable(false);

    this.login = this.formBuilder.group({
      tipo:['', Validators.required],
      email:['', Validators.required],
      senha:['', Validators.required]
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logar(){
    this.navCtrl.setRoot(MenuPage);
  }

  fncTipoLogin(tipo){
    this.boTpHidden = tipo;
  }

  fncEsqueciSenha(){
    this.navCtrl.push(EsqueciSenhaPage);
  }
 

}
