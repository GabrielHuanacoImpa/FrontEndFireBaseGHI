import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Proyecto} from '../../Proyecto';
import {PROYECTOS} from '../../mock-proyectos';

import { faTrashCan, faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-proyectos-item',
  templateUrl: './proyectos-item.component.html',
  styleUrls: ['./proyectos-item.component.css']
})
export class ProyectosItemComponent implements OnInit {
  @Input() proyecto: Proyecto = PROYECTOS[0];
  @Output() onDeleteProyecto: EventEmitter<Proyecto> = new EventEmitter();
  //@Output() onToggleReminder: EventEmitter<Proyecto> = new EventEmitter();
  faPencil = faPencil; 
  
  faTrashCan=faTrashCan; 
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(proyecto: Proyecto){
    /*console.log(proyecto);*/
    this.onDeleteProyecto.emit(proyecto);
  }
/*
  onToggle(proyecto: Proyecto){
   
    this.onToggleReminder.emit(proyecto);
  }

  */
  onEditar(proyecto: Proyecto){
    //console.log(proyecto);
    //this.onEditEducacion.emit(educacion);
    this.proyecto =proyecto;
  }
}
