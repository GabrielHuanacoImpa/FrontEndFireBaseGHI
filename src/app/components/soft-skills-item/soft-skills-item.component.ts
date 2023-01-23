import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {SoftSkill} from '../../SoftSkill';
import {SOFTSKILLS} from '../../mock-softSkills';

import { faTrashCan, faPencil } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-soft-skills-item',
  templateUrl: './soft-skills-item.component.html',
  styleUrls: ['./soft-skills-item.component.css']
})
export class SoftSkillsItemComponent implements OnInit {

  @Input() softSkill: SoftSkill = SOFTSKILLS[0];
  @Output() onDeleteSoftSkill: EventEmitter<SoftSkill> = new EventEmitter();
  //@Output() onToggleReminder: EventEmitter<SoftSkill> = new EventEmitter();
  faPencil = faPencil; 
  
  faTrashCan=faTrashCan; 
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(softSkill: SoftSkill){
    /*console.log(softSkill);*/
    this.onDeleteSoftSkill.emit(softSkill);
  }
/*
  onToggle(softSkill: SoftSkill){
    
    this.onToggleReminder.emit(softSkill);
  }
*/
onEditar(softSkill: SoftSkill){
  //console.log(idioma);
  //this.onEditEducacion.emit(educacion);
  this.softSkill =softSkill;
}

}
