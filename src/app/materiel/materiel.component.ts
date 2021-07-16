import { Component, OnInit } from '@angular/core';
import { MaterielsService } from '../services/materiels.service';
import { Materiel } from '../shared/models/materiel';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
  tabm: Materiel[] = null;
  constructor(private materielsService : MaterielsService) { }
  

  ngOnInit(): void {
    this.tabm=this.materielsService.getMateriels();
  }

}
