import { Component, OnInit } from '@angular/core';

import { ProyectoService } from '../../service/proyecto.service';

import {Proyecto} from '../../Proyecto' //interface

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[] = [];
  
  constructor(  
    /* inicializamos nuestro servicio */
    private proyectoService: ProyectoService
    ){}

  ngOnInit(): void {
    /* cuando se monte el componente, 
    vamos a llamar al  servicio, 
    guardamos la lista de tareas dentro de Proyecto */
    this.proyectoService.getProyectos().subscribe((proyectos)=>(
        this.proyectos = proyectos)
      );
    /* el componente ya no esta manejando 
    la logica de las tareas */
    /*=> se agrego porque es asinbcronico la carga de la base de datos */
    /* metodo subscribe de los observables */
    /* Leemos de nuestro archivo de tareas
    obtenemos la lista de tareas a traves de un servicio 
    cuando se monta el componente de tarea */
  }

  deleteProyecto(proyecto: Proyecto){
    /*console.log("deleteProyecto");*/
    this.proyectoService.deleteProyecto(proyecto)
      .subscribe(
        ()=>(
        this.proyectos = this.proyectos.filter( (t) => {
        /*console.log("proyecto delete");*/
        return t.id !== proyecto.id
        })
      ))
  }

  toggleReminder(proyecto: Proyecto){
    //proyecto.reminder = !proyecto.reminder;
    /*console.log(proyecto.reminder)*/
    this.proyectoService.updateProyectoReminder(proyecto).subscribe();
    /*la logica lo manejamos en comppnenete y 
    se lo pasamos al servicio para que aga la terea*/
    /*el servicio habla con la base de datos
    la logica lo manejamos en el componenete*/
  }

  addProyecto(proyecto: Proyecto){
    //console.log(proyecto); 
    // recibimos los datos de la tarea
    // esta tarea que recibimos aca deberiamos 
    // pasarla a un servicio que nos permita guardarla en la base de datos
    /* devuelve la tarea, la tarea se creo en un formulario
      pero la lista de tarea lo estoy manejando en otro 
      componente por eso debo agregar esta tarea no agregada
      debo agregarla al array de tareas, esta tarea que recien 
      esta insertada en la base de datos
    */

    this.proyectoService.addProyecto(proyecto).subscribe((proyecto)=>(
        this.proyectos.push(proyecto)
    ))
    //agrego la nueva tarea y se inserta en la base de datos

  }
}
