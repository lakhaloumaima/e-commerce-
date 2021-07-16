import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  passer() {
    alert("commande passée") ;
    this.router.navigate(['']) ;
  }
}
