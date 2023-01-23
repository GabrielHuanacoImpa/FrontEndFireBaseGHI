//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { SoftSkill } from '../../SoftSkill';

//import { UieduService } from 'src/app/service/uiedu.service';
import {SOFTSKILLS} from '../../mock-softSkills';

import { SoftSkillService } from '../../service/soft-skill.service';
//para boton
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-edit-soft-s',
  templateUrl: './edit-soft-s.component.html',
  styleUrls: ['./edit-soft-s.component.css']
})
export class EditSoftSComponent implements OnInit {

  @Output() onEdit:EventEmitter<SoftSkill> = new EventEmitter();
  @Input() softSkill: SoftSkill = SOFTSKILLS[0];

  id?: number=0;
  habilidad: string="";
  nivel: number=0;
  persona_id: number=1;

  subscription?: Subscription;

  constructor(
    private softSkillService: SoftSkillService
    
  ) { }

  ngOnInit(): void {
    this.id=this.softSkill.id;
    this.habilidad=this.softSkill.habilidad;
    this.nivel=this.softSkill.nivel;
    this.persona_id=this.softSkill.persona_id;

  }

  onSubmit(){
    
    const {id, habilidad, nivel, persona_id} = this
    const newSS = {id, habilidad, nivel, persona_id}
    
   
    this.softSkillService.updateSoftSkillReminder(newSS).subscribe(response=>{
      //console.log(response);
      this.onEdit.emit(response);});
     //envia objeto Educacion fuera del componenete, lo emite
}

}
