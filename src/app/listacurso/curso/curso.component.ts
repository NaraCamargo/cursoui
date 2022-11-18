import { Component, OnInit } from '@angular/core';
import { curso } from '../../core/model';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  listacurso: curso [] = [
    { id: 1, nomecurso: 'DS' },
    { id: 2, nomecurso: 'MKT' },
    { id: 3, nomecurso: 'ADM' },
    { id: 4, nomecurso: 'QUI' },
    { id: 5, nomecurso: 'EDF' }
  ]

  displayedColumns: string[] = [
    'id', 'nomecurso'
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
