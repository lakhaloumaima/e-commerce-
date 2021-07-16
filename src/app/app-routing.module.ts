import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcheterComponent } from './acheter/acheter.component';
import { AdminComponent } from './admin/admin.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ContactComponent } from './contact/contact.component';
import { MaterielComponent } from './materiel/materiel.component';
import { ModifierComponent } from './modifier/modifier.component';
import { PanierComponent } from './panier/panier.component';
import { GardeConnexionGuard } from './services/garde-auth.guard';

const routes: Routes = [
  { path: '', component: MaterielComponent },
  { path :'home' , component : MaterielComponent} ,
  { path : 'connexion' ,component : ConnexionComponent} , 
  { path :'ajouter'  , component : AjouterComponent , canActivate: [GardeConnexionGuard]} ,
  { path: 'admin/edit/:id',  component: ModifierComponent ,canActivate: [GardeConnexionGuard]} , 
  {path : 'admin' ,canActivate: [GardeConnexionGuard], component : AdminComponent} ,
  { path: 'contact' , component :ContactComponent} ,
  { path:'panier' , component : PanierComponent} ,
  { path: 'edit/:id' , component : AcheterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)] ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
