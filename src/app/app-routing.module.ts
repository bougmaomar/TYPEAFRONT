import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {
  InformationSurDemandeurComponent
} from "./demandeur/postuler/information-sur-demandeur/information-sur-demandeur.component"
import {LoginComponent} from "./demandeur/postuler/login/login.component";
import {HomeComponent} from "./demandeur/home/home.component";
import {FooterComponent} from "./demandeur/footer/footer.component";
import {
  PostulerManifestationComponent
} from "./demandeur/postuler/postuler-manifestation/postuler-manifestation.component";
import {ChoisirPostulerComponent} from "./demandeur/choisir-postuler/choisir-postuler.component";
import {ContactComponent} from "./demandeur/contact/contact.component";
import {PostulerMissionComponent} from "./demandeur/postuler/postuler-mission/postuler-mission.component";
import {HeaderComponent} from "./demandeur/header/header.component";
import { RegisterComponent } from './demandeur/postuler/register/register.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'postuler-manif', component: PostulerManifestationComponent},
  {path: 'postuler-mission', component: PostulerMissionComponent},
  {path: 'choisir-postuler', component: ChoisirPostulerComponent },
  {path: 'information-dem', component: InformationSurDemandeurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
