import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';


import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {PasswordModule} from "primeng/password";
import {CardModule} from "primeng/card";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatStepperModule} from "@angular/material/stepper";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {MatNativeDateModule} from "@angular/material/core";
import {CalendarModule} from "primeng/calendar";
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import { DemandeurComponent } from './demandeur/demandeur.component';
import {HeaderComponent} from "./demandeur/header/header.component";
import {PostulerMissionComponent} from "./demandeur/postuler/postuler-mission/postuler-mission.component";
import {FooterComponent} from "./demandeur/footer/footer.component";
import {HomeComponent} from "./demandeur/home/home.component";
import {ChoisirPostulerComponent} from "./demandeur/choisir-postuler/choisir-postuler.component";
import {
  PostulerManifestationComponent
} from "./demandeur/postuler/postuler-manifestation/postuler-manifestation.component";
import {RegisterComponent} from "./demandeur/postuler/register/register.component";
import {ContactComponent} from "./demandeur/contact/contact.component";
import {
  InformationSurDemandeurComponent
} from "./demandeur/postuler/information-sur-demandeur/information-sur-demandeur.component";
import {AdminComponent} from "./admin/admin.component";
import {SidenavComponent} from "./admin/sidenav/sidenav.component";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import {LoginComponent} from "./demandeur/postuler/login/login.component";
import {AuthentificationComponent} from "./admin/authentification/authentification.component";
import {HistoriqueComponent} from "./demandeur/historique/historique.component";
import {HeaderaComponent} from "./admin/headera/headera.component";
import {DemandeursComponent} from "./admin/demandeurs/demandeurs.component";
import { DemandesComponent } from './admin/demandes/demandes.component';
import { MessageComponent } from './admin/message/message.component';
import { SettingsComponent } from './admin/settings/settings.component';
import {MatSidenavModule} from "@angular/material/sidenav";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ChoisirPostulerComponent,
    PostulerMissionComponent,
    PostulerManifestationComponent,
    RegisterComponent,
    ContactComponent,
    InformationSurDemandeurComponent,
    AdminComponent,
    HeaderaComponent,
    SidenavComponent,
    DashboardComponent,
    DemandeursComponent,
    LoginComponent,
    AuthentificationComponent,
    HistoriqueComponent,
    DemandeurComponent,
    DemandesComponent,
    MessageComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    RouterModule,
    MatButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    CardModule,
    FontAwesomeModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatStepperModule,
    FormsModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    CalendarModule,
    TableModule,
    DropdownModule,
    MatPaginatorModule,
    MatTableModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
