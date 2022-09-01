import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss', '../explore-container/explore-container.component.scss']
})
export class Tab1Page {

  la: string
  lb: string
  lc: string
  tipo: any
  result: string

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Erro na verificação',
      message: 'Esse triângulo não existe!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  veri(){
    var v1 = parseFloat(this.la)
    var v2 = parseFloat(this.lb)
    var v3 = parseFloat(this.lc)
    if ((v1 + v2) > v3 && (v1 + v3) > v2 && (v2 + v3) > v1){
      if (v1 == v2 && v1 == v3 && v2 == v3){
        this.result = 'TRIÂNGULO EQUILATERO'
        this.tipo = "assets/icon/equilatero.png"}

      else if (v1 == v2 || v1 == v3 || v2 == v3){
        this.result = 'TRIÂNGULO ISOSCELES'
        this.tipo = "assets/icon/isosceles.png"}

      else if (v1 != v2 && v1 != v3 && v2 != v3){
        this.result = 'TRIÂNGULO ESCALENO'
        this.tipo = "assets/icon/escaleno.png"}
      }
        
    else{
      this.presentAlert()}
  }

}
