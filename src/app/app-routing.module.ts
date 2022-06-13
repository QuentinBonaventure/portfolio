import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { ContactComponent } from '../components/contact/contact.component';
import { HomeComponent } from '../components/home/home.component';
import { WorksComponent } from '../components/works/works.component';

const routes: Routes = [
  {path : 'home', component:HomeComponent},
  {path: 'works', component: WorksComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'aboutMe', component: AboutMeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
