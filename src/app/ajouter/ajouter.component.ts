import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterielsService } from '../services/materiels.service';
import { Materiel } from '../shared/models/materiel';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  
  constructor(private materielsService : MaterielsService, private router: Router) { }

  ngOnInit(): void {
  }

  ajouterMateriel(nom,image,prix)
  {
        var x = new Materiel ();
        
        x.nom=nom;
        x.image=image;
        x.prix=prix;
        this.materielsService.ajouterMateriel(x);
        alert ("le materiel est ajouté");
        this.router.navigate(['/admin']) ;
  }

}
