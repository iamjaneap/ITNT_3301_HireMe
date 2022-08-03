import { Component} from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage{
  profile = [];
  constructor(private dataService: DataService, private alrtCtrl: AlertController, private modalCtrl: ModalController) {
    this.dataService.getProfiles().subscribe(res => {
      console.log(res);
      this.profile = res;
    });
   }

   async openProfile(profile){
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: { id: profile.id},
      breakpoints:[0, 0.5, 0.8],
      initialBreakpoint: 0.8
    });
    modal.present();
   }



}
