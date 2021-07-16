import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterielComponent } from './materiel/materiel.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormsModule } from '@angular/forms';
import { MaterielsService } from './services/materiels.service';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ModifierComponent } from './modifier/modifier.component';
import { AcheterComponent } from './acheter/acheter.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { PanierComponent } from './panier/panier.component';


@NgModule({
  declarations: [
    AppComponent,
    MaterielComponent,
    NavmenuComponent,
    ConnexionComponent,
    AjouterComponent,
    ModifierComponent,
    AcheterComponent,
    AdminComponent,
    ContactComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    FormsModule,
    
  ],
  providers: [MaterielsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
