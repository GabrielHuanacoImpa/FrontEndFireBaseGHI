//import { Component, OnInit } from '@angular/core';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Experiencia } from '../../Experiencia';

//import { UieduService } from 'src/app/service/uiedu.service';

//para boton
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-exp',
  templateUrl: './add-exp.component.html',
  styleUrls: ['./add-exp.component.css']
})
export class AddExpComponent implements OnInit {

  @Output() onAddExp:EventEmitter<Experiencia> = new EventEmitter();

   id:number=0;
     
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

  //private showAddEdu: boolean = false; // se muestra o no 
  //showAddEdu: boolean = false; // se muestra o no 
  subscription?: Subscription;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.nombre_empresa.length === 0) {
      alert("Por favor ingrese nombre de la empresa");
      return
    }


    
    const {id, nombre_empresa,es_trabajo_actual,descripcion,tipo,fecha_inicio,fecha_fin,lugar,fecha_ultima_actualizacion,image_logo,reminder,persona_id} = this
    const newExp = {id, nombre_empresa,es_trabajo_actual,descripcion,tipo,fecha_inicio,fecha_fin,lugar,fecha_ultima_actualizacion,image_logo,reminder,persona_id}
    
   
    this.onAddExp.emit(newExp); //envia objeto Experiencia fuera del componenete, lo emite 

    //this.educacionService.updateEducacionReminder(newEdu).subscribe(response=>{
      //console.log(response);this.onEdit.emit(response);});
     //envia objeto Educacion fuera del componenete, lo emite

}

}
