import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeaturesComponent } from './components/features/features.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { ResultsComponent } from './components/results/results.component';
import { SignupComponent } from './components/signup/signup.component';
import { TipsComponent } from './components/tips/tips.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DonateComponent } from './components/donate/donate.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'donate', component: DonateComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'news', component: NewsComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'tips', component: TipsComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
