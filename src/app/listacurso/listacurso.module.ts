import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListacursoRoutingModule } from './listacurso-routing.module';
import { CursoComponent } from './curso/curso.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    CursoComponent
  ],
  imports: [
    CommonModule,
    ListacursoRoutingModule,
    MatTableModule
  ]
})
export class ListacursoModule { }
