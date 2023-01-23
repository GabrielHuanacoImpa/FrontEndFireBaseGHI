//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HardSkill } from '../../HardSkill';

//para boton
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-hard-s',
  templateUrl: './add-hard-s.component.html',
  styleUrls: ['./add-hard-s.component.css']
})
export class AddHardSComponent implements OnInit {
  @Output() onAddHardS:EventEmitter<HardSkill> = new EventEmitter();
  id: number=0;
  habilidadH: string="";
  nivelH: number=0;
  persona_id: number=1;

  subscription?: Subscription;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.habilidadH.length === 0) {
      alert("Por favor ingrese nombre de la habilidad");
      return
    }


    
    const {id, habilidadH, nivelH, persona_id} = this
    const newHs = {id, habilidadH, nivelH, persona_id}
    
   
    this.onAddHardS.emit(newHs); //envia objeto Experiencia fuera del componenete, lo emite 

}


}
