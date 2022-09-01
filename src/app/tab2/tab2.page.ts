import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  la: string
  lb: string
  lc: string
  area: string

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Resultado',
      subHeader: 'A área é de:',
      message: this.area,
      buttons: ['OK'],
    });

    await alert.present();
  }

  calc(){
    var v1 = parseFloat(this.la)
    var v2 = parseFloat(this.lb)
    var v3 = parseFloat(this.lc)
    var p = (v1 + v2 + v3) / 2
    var a = Math.sqrt(p * (p - v1) * (p - v2) * (p - v3))
    this.area = a.toFixed(1)
    this.presentAlert()
  }

}
