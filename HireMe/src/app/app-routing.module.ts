import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToUserHomePage = () => redirectLoggedInTo(['user-homepage']);
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    ...canActivate(redirectLoggedInToUserHomePage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',

  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'user-homepage',
    loadChildren: () => import('./user-homepage/user-homepage.module').then( m => m.UserHomepagePageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'companies',
    loadChildren: () => import('./companies/companies.module').then( m => m.CompaniesPageModule)
  },
  {
    path: 'mongkokbauan',
    loadChildren: () => import('./companylist/mongkokbauan/mongkokbauan.module').then( m => m.MongkokbauanPageModule)
  },
  {
    path: 'piu-sano',
    loadChildren: () => import('./companylist/piu-sano/piu-sano.module').then( m => m.PiuSanoPageModule)
  },
  {
    path: 'chico',
    loadChildren: () => import('./companylist/chico/chico.module').then( m => m.ChicoPageModule)
  },
  {
    path: 'johnny',
    loadChildren: () => import('./companylist/johnny/johnny.module').then( m => m.JohnnyPageModule)
  },
  {
    path: 'american',
    loadChildren: () => import('./companylist/american/american.module').then( m => m.AmericanPageModule)
  },
  {
    path: 'bocoffee',
    loadChildren: () => import('./companylist/bocoffee/bocoffee.module').then( m => m.BocoffeePageModule)
  },
  {
    path: 'brother',
    loadChildren: () => import('./companylist/brother/brother.module').then( m => m.BrotherPageModule)
  },
  {
    path: 'pascua',
    loadChildren: () => import('./companylist/pascua/pascua.module').then( m => m.PascuaPageModule)
  },
  {
    path: 'hidden',
    loadChildren: () => import('./companylist/hidden/hidden.module').then( m => m.HiddenPageModule)
  },
  {
    path: 'toro',
    loadChildren: () => import('./companylist/toro/toro.module').then( m => m.ToroPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
