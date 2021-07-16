import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterielsService } from '../services/materiels.service';
import { Materiel } from '../shared/models/materiel';

@Component({
  selector: 'app-acheter',
  templateUrl: './acheter.component.html',
  styleUrls: ['./acheter.component.css']
})
export class AcheterComponent implements OnInit {
  nom: string;
  image: String;
  prix: number;
  tabm: Materiel[] ;
  constructor(private router: Router, private route: ActivatedRoute, private materielsService: MaterielsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.nom = this.materielsService.getMaterielParId(+id).nom;
    this.image = this.materielsService.getMaterielParId(+id).image;
    this.prix = this.materielsService.getMaterielParId(+id).prix;
    
  }
  soumettre(f:NgForm)
  {
    //console.log(f.value);
    const n = f.value['nom'];
    const im = f.value['image'];
    const d = f.value['prix'];
    const id = this.route.snapshot.params['id'];
    console.log(n,im,d) ;
    this.materielsService.modifiermateriel(+id,n,im,d);
    alert ("materiel ajoutée au panier");
    this.router.navigate(['/panier']) ;

  }
}
