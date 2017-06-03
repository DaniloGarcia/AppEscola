import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { HomePage } from '../home/home';
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
  tipoLogin : any = 'pais';
  email : any;
  btnCriarConta : any = false;
  
  criarContaPage: any =  CriarContaPage;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public formBuilder: FormBuilder) {

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
    this.btnCriarConta = tipo == 'pais' ? false : true;
  }

  fncEsqueciSenha(){
    this.navCtrl.push(EsqueciSenhaPage);
  }

}
