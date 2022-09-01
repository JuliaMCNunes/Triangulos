import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  base: string
  alt: string
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

  cal(){
    var v1 = parseFloat(this.base)
    var v2 = parseFloat(this.alt)
    var a = (v1 * v2) / 2
    this.area = a.toFixed(1)
    this.presentAlert()
  }

}
