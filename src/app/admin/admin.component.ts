import { Component, OnInit } from '@angular/core';
import { MaterielsService } from '../services/materiels.service';
import { Materiel } from '../shared/models/materiel';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  tabm: Materiel[] = null;
  constructor(private materielsService : MaterielsService) { }

  ngOnInit(): void {
    this.tabm=this.materielsService.getMateriels();
  }
  /*supprimermateriel(tabm : Materiel) {
    console.log(tabm) ;
  }*/
  supprimermateriel(f)
  {
    this.materielsService.supprimermateriel(f);
  }
  

}