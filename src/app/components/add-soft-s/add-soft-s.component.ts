//import { Component, OnInit } from '@angular/core';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SoftSkill } from '../../SoftSkill';

//para boton
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-soft-s',
  templateUrl: './add-soft-s.component.html',
  styleUrls: ['./add-soft-s.component.css']
})
export class AddSoftSComponent implements OnInit {
  @Output() onAddSoftS:EventEmitter<SoftSkill> = new EventEmitter();

  id: number=0;
  habilidad: string="";
  nivel: number=0;
  persona_id: number=1;

  subscription?: Subscription;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.habilidad.length === 0) {
      alert("Por favor ingrese nombre de la habilidad");
      return
    }


    
    const {id, habilidad, nivel, persona_id} = this
    const newSS = {id, habilidad, nivel, persona_id}
    
   
    this.onAddSoftS.emit(newSS); //envia objeto Experiencia fuera del componenete, lo emite 

}

}
