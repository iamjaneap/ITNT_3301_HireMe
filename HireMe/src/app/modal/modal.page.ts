import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { DataService, Profile } from '../services/data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() id: string;
  profile: Profile;
  constructor(private dataService: DataService, private modalCtrl: ModalController,
    private toastCtrl: ToastController) { }

  ngOnInit() {
    this.dataService.getProfileById(this.id).subscribe(res => {
      this.profile = res;
    });
  }

  async updateProfile(){
    console.log('ey');
    this.dataService.updateProfile(this.profile);
    const toast = await this.toastCtrl.create({
      message: 'Profile Updated!',
      duration: 1000
    });
    toast.present();
  }

  async deleteProfile(){
    console.log('ey');
    this.dataService.deleteProfile(this.profile);
    this.modalCtrl.dismiss();
  }

}
