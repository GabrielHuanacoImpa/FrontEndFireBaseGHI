import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Idioma} from '../../Idioma';
import {IDIOMAS} from '../../mock-idiomas';

import { faTrashCan, faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-idiomas-item',
  templateUrl: './idiomas-item.component.html',
  styleUrls: ['./idiomas-item.component.css']
})
export class IdiomasItemComponent implements OnInit {

  @Input() idioma: Idioma = IDIOMAS[0];
  @Output() onDeleteIdioma: EventEmitter<Idioma> = new EventEmitter();
  //@Output() onToggleReminder: EventEmitter<Idioma> = new EventEmitter();
  faPencil = faPencil; 
  
  faTrashCan=faTrashCan;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(idioma: Idioma){
    /*console.log(idioma);*/
    this.onDeleteIdioma.emit(idioma);
  }
/*
  onToggle(idioma: Idioma){
    
    this.onToggleReminder.emit(idioma);
  }
*/
onEditar(idioma: Idioma){
  //console.log(idioma);
  //this.onEditEducacion.emit(educacion);
  this.idioma =idioma;
}

}
