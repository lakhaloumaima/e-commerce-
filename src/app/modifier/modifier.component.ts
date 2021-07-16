import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterielsService } from '../services/materiels.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  id : string ;
  nom: string ;
  image : String;
  prix: number;

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
    alert ("le materiel a été modifié");
    this.router.navigate(['/admin']) ;

  }

}

