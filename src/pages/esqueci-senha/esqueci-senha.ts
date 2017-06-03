import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-esqueci-senha',
  templateUrl: 'esqueci-senha.html',
})
export class EsqueciSenhaPage {

  esqueciSenha: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController) {

    this.esqueciSenha = this.formBuilder.group({
      email:['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EsqueciSenhaPage');
  }

  fncEnviaSenha(){
    let alert = this.alertCtrl.create({
      title: 'Enviado',
      subTitle: 'Senha enviada para o e-mail informado.',
      buttons: [      
        {
          text: 'Ok',
          role: 'ok',
          handler: () => {
            this.navCtrl.setRoot(LoginPage);
          }
        }
      ]
    });
    alert.present();
  }

}
