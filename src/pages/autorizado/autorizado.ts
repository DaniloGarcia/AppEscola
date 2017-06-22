import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the AutorizadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-autorizado',
  templateUrl: 'autorizado.html',
})
export class AutorizadoPage {

  public base64Image: string;
  public autorizado: any = {};

  public parentescos: any = {};
  public tipoDocs: any = {};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public camera: Camera) {
    
    // Verifica se veio um autorizado para alteracao
    if ( this.navParams.get('params') ){
      this.autorizado = this.navParams.get('params');
    }

    //lista os parentescos
    this.parentescos = [
      {nome: "Tio(a)",      codigo: "1" },
      {nome: "Primo(a)",    codigo: "2" },
      {nome: "Irmão(ã)",    codigo: "3" },
      {nome: "Sobrinho(a)", codigo: "4" },
      {nome: "Padastro",    codigo: "5" },
      {nome: "Madastra",    codigo: "6" }
    ]

    //lista de documentos
    this.tipoDocs = [
      {nome: "CPF",         codigo: "1" },
      {nome: "RG",          codigo: "2" },
      {nome: "Habilitação", codigo: "3" },
    ]


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutorizadoPage');
  }

  tiraFotoCamera(){

    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }

  buscaFotoGaleria(){

    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }

}
