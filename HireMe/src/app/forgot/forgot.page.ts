import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  credentials: FormGroup;
  handlerMessage: string;

  constructor(
    private fb: FormBuilder,
    public toastController: ToastController,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    ) {}

    get email() {
      return this.credentials.get('email');
    }
    get password() {
      return this.credentials.get('password');
    }

    ngOnInit() {
      this.credentials = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      });
    }

    async resetpassword(){
      const loading = await this.loadingController.create();
      await loading.present();
      await this.authService.reset(this.credentials.value);
      loading.dismiss();

      const alert = await this.alertController.create({
        header: 'RESET LINK SENT',
        message: 'Open your email and click the link sent to you to reset your passsword. Check the spam folders if you cant find it',
        buttons: [
          {
            text: 'OK',
            role: 'confirm',
            handler:() => {this.handlerMessage = 'Alert canceled';}
          }
        ]
      });
      await alert.present();
    }
}
