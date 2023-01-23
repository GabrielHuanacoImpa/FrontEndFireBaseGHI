import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from '../../service/experiencia.service';

import {Experiencia} from '../../Experiencia' //interface


@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  experiencias: Experiencia[] = [];

  constructor(
        /* inicializamos nuestro servicio */
        private experienciaService: ExperienciaService
  ) { }

  ngOnInit(): void {
      /* cuando se monte el componente, 
    vamos a llamar al  servicio, 
    guardamos la lista de tareas dentro de Experiencia */
    this.experienciaService.getExperiencias().subscribe((experiencias)=>(
      this.experiencias = experiencias)
    );
  /* el componente ya no esta manejando 
  la logica de las tareas */
  /*=> se agrego porque es asinbcronico la carga de la base de datos */
  /* metodo subscribe de los observables */
  /* Leemos de nuestro archivo de tareas
  obtenemos la lista de tareas a traves de un servicio 
  cuando se monta el componente de tarea */
  }
  deleteExperiencia(experiencia: Experiencia){
    /*console.log("deleteTask");*/
    this.experienciaService.deleteExperiencia(experiencia)
      .subscribe(
        ()=>(
        this.experiencias = this.experiencias.filter( (t) => {
        /*console.log("experiencia delete");*/
        return t.id !== experiencia.id
        })
      ))
  }

  toggleReminder(experiencia: Experiencia){
    //experiencia.reminder = !experiencia.reminder;
    
    /*console.log(experiencia.reminder)*/
    this.experienciaService.updateExperienciaReminder(experiencia).subscribe();
    /*la logica lo manejamos en comppnenete y 
    se lo pasamos al servicio para que aga la terea*/
    /*el servicio habla con la base de datos
    la logica lo manejamos en el componenete*/
  }

  addExperiencia(experiencia: Experiencia){
    //console.log(experiencia); 
    // recibimos los datos de la tarea
    // esta tarea que recibimos aca deberiamos 
    // pasarla a un servicio que nos permita guardarla en la base de datos
    /* devuelve la tarea, la tarea se creo en un formulario
      pero la lista de tarea lo estoy manejando en otro 
      componente por eso debo agregar esta tarea no agregada
      debo agregarla al array de tareas, esta tarea que recien 
      esta insertada en la base de datos
    */

    this.experienciaService.addExperiencia(experiencia).subscribe((experiencia)=>(
        this.experiencias.push(experiencia)
  /* 
    this.experienciaService.addExperiencia(experiencia).subscribe((response)=>(
          this.experiencias.push(response)
   */       
    ))
    //agrego la nueva tarea y se inserta en la base de datos

        //this.educacionService.updateEducacionReminder(newEdu).subscribe(response=>{
      //console.log(response);this.onEdit.emit(response);});
     //envia objeto Educacion fuera del componenete, lo emite

  }


}

