import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  credentials: FormGroup;
  profile = [];
  birthday: string;
  email2: string;
  gender: string;
  name: string;
  username: string;



  constructor(
    private fb: FormBuilder,
    public toastController: ToastController,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private dataService: DataService,
    private router: Router)
    {

      this.dataService.getProfiles().subscribe(res => {
        console.log(res);
      });
    }



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

    async register(){
      const loading = await this.loadingController.create();
      await loading.present();

      this.dataService.addProfile({birthday: this.birthday, email: this.email2,
        gender: this.gender, name: this.name, username: this.username});

      const user = await this.authService.register(this.credentials.value);
      loading.dismiss();

      if (user) {
        this.router.navigateByUrl('/user-homepage', {replaceUrl: true});
      } else {
        this.showAlert('Registration failed', 'Please try again');
      }
    }


    async showAlert(header, message) {
      const alert = await this.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
      await alert.present();
    }


}

