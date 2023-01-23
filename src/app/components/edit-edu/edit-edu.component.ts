import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { Educacion } from '../../Educacion';

import { UieduService } from 'src/app/service/uiedu.service';
import {EDUCACIONES} from '../../mock-educaciones';

import { EducacionService } from '../../service/educacion.service';
//para boton
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css']
})
export class EditEduComponent implements OnInit {

  @Output() onEdit:EventEmitter<Educacion> = new EventEmitter();
  @Input() educacion: Educacion = EDUCACIONES[0];

  id?:number = 0;
  institucion:string = "";
  titulo:string = "";
  domicilio:string = "";
  fecha_inicio:Date= new Date("0000-00-00");
  fecha_fin:Date = new Date("0000-00-00");
  image_institucion:string = "";
  ultima_actualizacion:Date = new Date("0000-00-00");
  reminder:number = 1;
  persona_id:number  = 1;

  //private showAddEdu: boolean = false; // se muestra o no 
  showEditEdu: boolean = false; // se muestra o no 
  subscription?: Subscription;

  constructor(
    private uiEduService: UieduService,
    private educacionService: EducacionService

  ) { 

            // Boton Alta
            this.subscription = this.uiEduService.onToggle()
            .subscribe(value => this.showEditEdu = value);
        //cuando presiono boton cambia el valor y color de add a close
  

        // Fin Boton Alta

  }

  ngOnInit(): void {
    this.id = this.educacion.id;
    this.institucion = this.educacion.institucion;
    this.titulo=this.educacion.titulo;
    this.domicilio=this.educacion.domicilio;
    this.fecha_inicio=this.educacion.fecha_inicio;
    this.fecha_fin=this.educacion.fecha_fin;
    this.image_institucion=this.educacion.image_institucion;
    this.ultima_actualizacion=this.educacion.ultima_actualizacion;
    this.reminder=this.educacion.reminder;
    this.persona_id=this.educacion.persona_id;
  //console.log(this.educacion);
  }

  onSubmit(){
    /*  
    if(this.institucion.length === 0) {
        alert("Por favor ingrese una experiencia educativa");
        return
      }
  */

      
      const {id,institucion,titulo,domicilio,fecha_inicio,fecha_fin,image_institucion,ultima_actualizacion,reminder,persona_id} = this
      const newEdu = {id,institucion,titulo,domicilio,fecha_inicio,fecha_fin,image_institucion,ultima_actualizacion,reminder,persona_id}
      //console.log('Enviando evento');
     
      
      this.educacionService.updateEducacionReminder(newEdu).subscribe(response=>{
        //console.log(response);
        this.onEdit.emit(response);});
       //envia objeto Educacion fuera del componenete, lo emite
  }

}
