import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {HardSkill} from '../../HardSkill';
import {HARDSKILLS} from '../../mock-hardSkills';

import { faTrashCan, faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hard-skills-item',
  templateUrl: './hard-skills-item.component.html',
  styleUrls: ['./hard-skills-item.component.css']
})
export class HardSkillsItemComponent implements OnInit {

  @Input() hardSkill: HardSkill = HARDSKILLS[0];
  @Output() onDeleteHardSkill: EventEmitter<HardSkill> = new EventEmitter();
  //@Output() onToggleReminder: EventEmitter<HardSkill> = new EventEmitter();
  faPencil = faPencil; 
  
  faTrashCan=faTrashCan;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(hardSkill: HardSkill){
    /*console.log(hardSkill);*/
    this.onDeleteHardSkill.emit(hardSkill);
  }
/*
  onToggle(hardSkill: HardSkill){
    
    this.onToggleReminder.emit(hardSkill);
  }
*/
  onEditar(hardSkill: HardSkill){
    //console.log(idioma);
    //this.onEditEducacion.emit(educacion);
    this.hardSkill =hardSkill;
  }

}
