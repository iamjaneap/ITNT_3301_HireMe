import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.page.html',
  styleUrls: ['./user-homepage.page.scss'],
})
export class UserHomepagePage {


  constructor(
    private authService: AuthService,
    private router: Router) {}

  async logout(){
    await this.authService.logout();
    this.router.navigateByUrl('/', {replaceUrl: true});
  }
}
