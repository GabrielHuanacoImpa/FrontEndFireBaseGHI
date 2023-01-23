import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Educacion} from '../../Educacion';
import {EDUCACIONES} from '../../mock-educaciones';

import { faTrashCan, faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-educaciones-item',
  templateUrl: './educaciones-item.component.html',
  styleUrls: ['./educaciones-item.component.css']
})
export class EducacionesItemComponent implements OnInit {

  @Input() educacion: Educacion = EDUCACIONES[0];
  @Output() onDeleteEducacion: EventEmitter<Educacion> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Educacion> = new EventEmitter();
  //@Output() onEditEducacion: EventEmitter<Educacion> = new EventEmitter();
  //@Output() onToggleEditar: EventEmitter<Educacion> = new EventEmitter();
  showEditEdu: boolean = false; // se muestra o no 

  faPencil = faPencil; 
 
  faTrashCan=faTrashCan;
  
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(educacion: Educacion){
    /*console.log(educacion);*/
    this.onDeleteEducacion.emit(educacion);
  }

  onToggle(educacion: Educacion){
    /*console.log(educacion);*/
    this.onToggleReminder.emit(educacion);
  }

  onEditar(educacion: Educacion){
    //console.log(educacion);
    //this.onEditEducacion.emit(educacion);
    this.educacion =educacion;
  }
/*
  onToggleEdit(educacion: Educacion){
    
    this.showEditEdu === !this.showEditEdu;
    this.onToggleEditar.emit(educacion);
  }
*/

}
