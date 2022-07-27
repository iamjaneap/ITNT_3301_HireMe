import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public toastController: ToastController) {}
    async already(){
      const toast = await this.toastController.create({
        message: 'You are already at sign-in page',
        duration: 3000
      });
      toast.present();
    }


}
