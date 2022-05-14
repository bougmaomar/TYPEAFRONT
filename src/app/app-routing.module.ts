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
import {HistoriqueComponent} from "./demandeur/historique/historique.component";
import {AdminComponent} from "./admin/admin.component";
import {AuthentificationComponent} from "./admin/authentification/authentification.component";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import {DemandeursComponent} from "./admin/demandeurs/demandeurs.component";
import {SettingsComponent} from "./admin/settings/settings.component";
import {MessageComponent} from "./admin/message/message.component";
import {DemandesComponent} from "./admin/demandes/demandes.component";
import {DemandeurComponent} from "./demandeur/demandeur.component";

const routes: Routes = [
  {
    path: "", component: DemandeurComponent,
    children: [
      {path: 'header', component: HeaderComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'home', component: HomeComponent},
      {path: '', component: HomeComponent},
      {path: 'footer', component: FooterComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'postuler-manif', component: PostulerManifestationComponent},
      {path: 'postuler-mission', component: PostulerMissionComponent},
      {path: 'choisir-postuler', component: ChoisirPostulerComponent},
      {path: 'information-dem', component: InformationSurDemandeurComponent},
      {path: 'historique', component: HistoriqueComponent},
    ]
  },

  {path: "admin",
  component: AdminComponent,
    children: [
      {path: "", component: DashboardComponent},
      {path: "authentification", component: AuthentificationComponent},
      {path: "dashboard", component: DashboardComponent},
      {path: "demandeurs", component: DemandeursComponent},
      {path: "demandes", component: DemandesComponent},
      {path: "message", component: MessageComponent},
      {path: "settings", component: SettingsComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
