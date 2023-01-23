import { Component, OnInit } from '@angular/core';

import { IdiomaService } from '../../service/idioma.service';

import {Idioma} from '../../Idioma' //interface

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {

  idiomas: Idioma[] = [];
  
  constructor(  
    /* inicializamos nuestro servicio */
    private idiomaService: IdiomaService
    ){}

  ngOnInit(): void {
    /* cuando se monte el componente, 
    vamos a llamar al  servicio, 
    guardamos la lista de tareas dentro de Idioma */
    this.idiomaService.getIdiomas().subscribe((idiomas)=>(
        this.idiomas = idiomas)
      );
    /* el componente ya no esta manejando 
    la logica de las tareas */
    /*=> se agrego porque es asinbcronico la carga de la base de datos */
    /* metodo subscribe de los observables */
    /* Leemos de nuestro archivo de tareas
    obtenemos la lista de tareas a traves de un servicio 
    cuando se monta el componente de tarea */
  }

  deleteIdioma(idioma: Idioma){
    /*console.log("deleteIdioma");*/
    this.idiomaService.deleteIdioma(idioma)
      .subscribe(
        ()=>(
        this.idiomas = this.idiomas.filter( (t) => {
        /*console.log("idioma delete");*/
        return t.id !== idioma.id
        })
      ))
  }

  toggleReminder(idioma: Idioma){
    //idioma.reminder = !idioma.reminder;
    /*console.log(idioma.reminder)*/
    this.idiomaService.updateIdiomaReminder(idioma).subscribe();
    /*la logica lo manejamos en comppnenete y 
    se lo pasamos al servicio para que aga la terea*/
    /*el servicio habla con la base de datos
    la logica lo manejamos en el componenete*/
  }

  addIdioma(idioma: Idioma){
    //console.log(idioma); 
    // recibimos los datos de la tarea
    // esta tarea que recibimos aca deberiamos 
    // pasarla a un servicio que nos permita guardarla en la base de datos
    /* devuelve la tarea, la tarea se creo en un formulario
      pero la lista de tarea lo estoy manejando en otro 
      componente por eso debo agregar esta tarea no agregada
      debo agregarla al array de tareas, esta tarea que recien 
      esta insertada en la base de datos
    */

    this.idiomaService.addIdioma(idioma).subscribe((idioma)=>(
        this.idiomas.push(idioma)
    ))
    //agrego la nueva tarea y se inserta en la base de datos

  }

}
