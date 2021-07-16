import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../services/connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(private sConnexion : ConnexionService) { }
  ngOnInit(): void {
  }
  seConnecter (l,m)
   {  
      //console.log(l+ ' ' + m);
      this.sConnexion.seConnecter(l,m);
   }
}
