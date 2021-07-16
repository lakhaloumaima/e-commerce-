import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MATERIELS } from '../shared/models/des-materiels';
import { Materiel } from '../shared/models/materiel';
@Injectable({
  providedIn: 'root'
})
export class MaterielsService {
  /*supprimermateriel(p: Materiel) {
    throw new Error('Method not implemented.');
  } */
  materiels : Materiel[]=MATERIELS;
  constructor(private router : Router) { }
getMateriels () : Materiel []
{
return this.materiels;
}
ajouterMateriel (f)
{
  if (this.materiels.length == 0)
    {
      // cas d'un tableau vide
      f.id=1;
      this.materiels.push(f);
    }
    else
    {
      // le tableau contient au moins un élément
      // L'id du nouveau film est l'id du dernier film augmenté de 1
      let y = (this.materiels.length)-1;
      console.log(y);
      let x=this.materiels[y];
      f.id=(x.id)+1;
      this.materiels.push(f);
    }
  
}

getMaterielParId (id :  number) : Materiel
{
  for (let i=0;i< this.materiels.length; i++)
    if (this.materiels[i].id == id)
      return this.materiels[i];
}

supprimermateriel(f: Materiel) {
  let materiels = this.getMateriels();
  let i = MATERIELS.indexOf(f);
  if (i !== -1) {
    materiels.splice(i,1);
  }
} 


modifiermateriel (id : number,n : string , im:String,d : number ) {
  let materiels = this.getMateriels();
  //let f = films.find( (x) => {return x.id == id;});
  for (let i=0;i< materiels.length; i++) {
    if (materiels[i].id == id)
        {this.materiels[i].nom=n;
          this.materiels[i].image=im;
        this.materiels[i].prix=d;
        }
  }
  /*this.materielsService.modifierProduit(this.modifiermateriel);*/
}
acheter (id : number , n : string,im : string , d : number) {
  let materiels = this.getMateriels();
  //let f = films.find( (x) => {return x.id == id;});
}
}
