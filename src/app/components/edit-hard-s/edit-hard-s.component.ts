//import { Component, OnInit } from '@angular/core';

import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { HardSkill } from '../../HardSkill';

//import { UieduService } from 'src/app/service/uiedu.service';
import {HARDSKILLS} from '../../mock-hardSkills';

import { HardSkillService } from '../../service/hard-skill.service';
//para boton
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-hard-s',
  templateUrl: './edit-hard-s.component.html',
  styleUrls: ['./edit-hard-s.component.css']
})
export class EditHardSComponent implements OnInit {

  @Output() onEdit:EventEmitter<HardSkill> = new EventEmitter();
  @Input() hardSkill: HardSkill = HARDSKILLS[0];

  id?: number=0;
  habilidadH: string="";
  nivelH: number=0;
  persona_id: number=1;

  subscription?: Subscription;


  constructor(
    private hardSkillService: HardSkillService
  ) { }

  ngOnInit(): void {
    this.id=this.hardSkill.id;
    this.habilidadH=this.hardSkill.habilidadH;
    this.nivelH=this.hardSkill.nivelH;
    this.persona_id=this.hardSkill.persona_id;

  }

  onSubmit(){
    
    const {id, habilidadH, nivelH, persona_id} = this
    const newHS = {id, habilidadH, nivelH, persona_id}
    
   
    this.hardSkillService.updateHardSkillReminder(newHS).subscribe(response=>{
      //console.log(response);
      this.onEdit.emit(response);});
     //envia objeto Educacion fuera del componenete, lo emite
}


}
