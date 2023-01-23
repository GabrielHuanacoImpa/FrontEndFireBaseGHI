//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { Experiencia } from '../../Experiencia';

//import { UieduService } from 'src/app/service/uiedu.service';
import {EXPERIENCIAS} from '../../mock-experiencias';

import { ExperienciaService } from '../../service/experiencia.service';
//para boton
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit {

  @Output() onEdit:EventEmitter<Experiencia> = new EventEmitter();
  @Input() experiencia: Experiencia = EXPERIENCIAS[0];

  id?:number=0;
     
  nombre_empresa:string = "";
  es_trabajo_actual:number = 1;
  descripcion:string = "";
  tipo:string = "";
  fecha_inicio:Date= new Date("0000-00-00");
  fecha_fin:Date= new Date("0000-00-00");
  lugar:string = "";
  fecha_ultima_actualizacion:Date= new Date("0000-00-00");
  image_logo:string = "";
  reminder:number = 1;
  persona_id:number = 1;

  subscription?: Subscription;

  constructor(
    private experienciaService: ExperienciaService
  ) { }

  ngOnInit(): void {
    this.id=this.experiencia.id;
    this.nombre_empresa=this.experiencia.nombre_empresa;
    this.es_trabajo_actual=this.experiencia.es_trabajo_actual;
    this.descripcion=this.experiencia.descripcion;
    this.tipo=this.experiencia.tipo;
    this.fecha_inicio=this.experiencia.fecha_inicio;
    this.fecha_fin=this.experiencia.fecha_fin;
    this.lugar = this.experiencia.lugar;
    this.fecha_ultima_actualizacion=this.experiencia.fecha_ultima_actualizacion;
    this.image_logo = this.experiencia.image_logo;
    this.reminder = this.experiencia.reminder;
    this.persona_id=this.experiencia.persona_id;


  }

  onSubmit(){
 


      const {id, nombre_empresa,es_trabajo_actual,descripcion,tipo,fecha_inicio,fecha_fin,lugar,fecha_ultima_actualizacion,image_logo,reminder,persona_id} = this
      const newExp = {id, nombre_empresa,es_trabajo_actual,descripcion,tipo,fecha_inicio,fecha_fin,lugar,fecha_ultima_actualizacion,image_logo,reminder,persona_id}
    
      //console.log('Enviando evento');
     
      
      this.experienciaService.updateExperienciaReminder(newExp).subscribe(response=>{
        //console.log(response);
        this.onEdit.emit(response);});
       //envia objeto Educacion fuera del componenete, lo emite
  }

}
