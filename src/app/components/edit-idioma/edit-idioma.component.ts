//import { Component, OnInit } from '@angular/core';

import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { Idioma } from '../../Idioma';

//import { UieduService } from 'src/app/service/uiedu.service';
import {IDIOMAS} from '../../mock-idiomas';

import { IdiomaService } from '../../service/idioma.service';
//para boton
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-idioma',
  templateUrl: './edit-idioma.component.html',
  styleUrls: ['./edit-idioma.component.css']
})
export class EditIdiomaComponent implements OnInit {

  @Output() onEdit:EventEmitter<Idioma> = new EventEmitter();
  @Input() idioma: Idioma = IDIOMAS[0];

  id?: number=0;
  habilidadI: string="";
  nivelI: number=0;
  persona_id: number=1;

  subscription?: Subscription;

  constructor(
    private idiomaService: IdiomaService
  ) { }

  ngOnInit(): void {
    this.id=this.idioma.id;
    this.habilidadI=this.idioma.habilidadI;
    this.nivelI=this.idioma.nivelI;
    this.persona_id=this.idioma.persona_id;

  }

  onSubmit(){
    
    const {id, habilidadI, nivelI, persona_id} = this
    const newIdio = {id, habilidadI, nivelI, persona_id}
    
   
    this.idiomaService.updateIdiomaReminder(newIdio).subscribe(response=>{
      //console.log(response);
      this.onEdit.emit(response);});
     //envia objeto Educacion fuera del componenete, lo emite
}


}
