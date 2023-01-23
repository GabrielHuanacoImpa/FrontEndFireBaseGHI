import { Component, OnInit } from '@angular/core';

import { EducacionService } from '../../service/educacion.service';

import {Educacion} from '../../Educacion' //interface
  // Boton Alta
      //poder escuchar cuando hacemos click al boton, para pasarselo al otro componenete
      import { UieduService } from 'src/app/service/uiedu.service';
      import { Subscription } from 'rxjs';
      // importamos para saber en que ruta estamos
      import { Router } from '@angular/router';


  // Fin Boton Alta


@Component({
  selector: 'app-educaciones',
  templateUrl: './educaciones.component.html',
  styleUrls: ['./educaciones.component.css']
})
export class EducacionesComponent implements OnInit {
  // Boton Alta
      showAddEdu:boolean = false; // se ve boton close
      subscription?: Subscription;

  // Fin Boton Alta


  educaciones: Educacion[] = [];
  
  constructor(  
    // Boton Alta
    private uieduService:UieduService,
    private router:Router,
    // Fin Boton Alta

    /* inicializamos nuestro servicio */
    private educacionService: EducacionService
    ){

        // Boton Alta
            this.subscription = this.uieduService.onToggle()
            .subscribe(value => this.showAddEdu = value);
        //cuando presiono boton cambia el valor y color de add a close
  

        // Fin Boton Alta

    }

  ngOnInit(): void {
    /* cuando se monte el componente, 
    vamos a llamar al  servicio, 
    guardamos la lista de tareas dentro de Educacion */
    this.educacionService.getEducaciones().subscribe((educaciones)=>(
        this.educaciones = educaciones)
      );
    /* el componente ya no esta manejando 
    la logica de las tareas */
    /*=> se agrego porque es asinbcronico la carga de la base de datos */
    /* metodo subscribe de los observables */
    /* Leemos de nuestro archivo de tareas
    obtenemos la lista de tareas a traves de un servicio 
    cuando se monta el componente de tarea */
  }

  deleteEducacion(educacion: Educacion){
    /*console.log("deleteEducacion");*/
    this.educacionService.deleteEducacion(educacion)
      .subscribe(
        ()=>(
        this.educaciones = this.educaciones.filter( (t) => {
        /*console.log("educacion delete");*/
        return t.id !== educacion.id
        })
      ))
  }

  toggleReminder(educacion: Educacion){
    //educacion.reminder = !educacion.reminder;
    if(educacion.reminder >= 1){
      educacion.reminder=0;
    }else if(educacion.reminder === 0){
      educacion.reminder=1;
    };
        /*console.log(educacion.reminder)*/
    this.educacionService.updateEducacionReminder(educacion).subscribe();
    //this.educacionService.updateEducacionReminder(educacion).subscribe((educacion)=>(
     // this.educaciones.(educacion)))
    /*la logica lo manejamos en comppnenete y 
    se lo pasamos al servicio para que aga la terea*/
    /*el servicio habla con la base de datos
    la logica lo manejamos en el componenete*/
  }

  addEducacion(educacion: Educacion){
    //console.log(educacion); 
    // recibimos los datos de la tarea
    // esta tarea que recibimos aca deberiamos 
    // pasarla a un servicio que nos permita guardarla en la base de datos
    /* devuelve la tarea, la tarea se creo en un formulario
      pero la lista de tarea lo estoy manejando en otro 
      componente por eso debo agregar esta tarea no agregada
      debo agregarla al array de tareas, esta tarea que recien 
      esta insertada en la base de datos
    */

    
      this.educacionService.addEducacion(educacion).subscribe((educacion)=>(
        this.educaciones.push(educacion)
    ))
    
   
    //this.educacionService.addEducacion(educacion);
    //this.educacionService.addEducacion(educacion);
   
    //agrego la nueva tarea y se inserta en la base de datos

  }
  // Boton Alta
      toggleAddEdu(){
        //console.log("toggleAddTask!");
        // cambia el valor del toogle del show
        this.uieduService.toggleAddEducacion();
      }

      hasRoute(route: string){
        return this.router.url === route
        // devuelve verdadero si el url es igual al router
        // de este componente
      }


  // Fin Boton Alta
  //Boton editar
  editEducacion(educacion: Educacion){
    //educacion.reminder = !educacion.reminder;

        /*console.log(educacion.reminder)*/
    this.educacionService.updateEducacionReminder(educacion).subscribe();
    //this.educacionService.updateEducacionReminder(educacion).subscribe((educacion)=>(
     // this.educaciones.(educacion)))
    /*la logica lo manejamos en comppnenete y 
    se lo pasamos al servicio para que aga la terea*/
    /*el servicio habla con la base de datos
    la logica lo manejamos en el componenete*/
  }
  //fin editar
}
