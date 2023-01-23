import { Component, OnInit } from '@angular/core';

import { SoftSkillService } from '../../service/soft-skill.service';

import {SoftSkill} from '../../SoftSkill' //interface

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css']
})
export class SoftSkillsComponent implements OnInit {

  softSkills: SoftSkill[] = [];
  
  constructor(  
    /* inicializamos nuestro servicio */
    private softSkillService: SoftSkillService
    ){}

  ngOnInit(): void {
    /* cuando se monte el componente, 
    vamos a llamar al  servicio, 
    guardamos la lista de tareas dentro de SoftSkill */
    this.softSkillService.getSoftSkills().subscribe((softSkills)=>(
        this.softSkills = softSkills)
      );
    /* el componente ya no esta manejando 
    la logica de las tareas */
    /*=> se agrego porque es asinbcronico la carga de la base de datos */
    /* metodo subscribe de los observables */
    /* Leemos de nuestro archivo de tareas
    obtenemos la lista de tareas a traves de un servicio 
    cuando se monta el componente de tarea */
  }

  deleteSoftSkill(softSkill: SoftSkill){
    /*console.log("deleteSoftSkill");*/
    this.softSkillService.deleteSoftSkill(softSkill)
      .subscribe(
        ()=>(
        this.softSkills = this.softSkills.filter( (t) => {
        /*console.log("softSkill delete");*/
        return t.id !== softSkill.id
        })
      ))
  }

  toggleReminder(softSkill: SoftSkill){
    //softSkill.reminder = !softSkill.reminder;
    /*console.log(softSkill.reminder)*/
    this.softSkillService.updateSoftSkillReminder(softSkill).subscribe();
    /*la logica lo manejamos en comppnenete y 
    se lo pasamos al servicio para que aga la terea*/
    /*el servicio habla con la base de datos
    la logica lo manejamos en el componenete*/
  }

  addSoftSkill(softSkill: SoftSkill){
    //console.log(softSkill); 
    // recibimos los datos de la tarea
    // esta tarea que recibimos aca deberiamos 
    // pasarla a un servicio que nos permita guardarla en la base de datos
    /* devuelve la tarea, la tarea se creo en un formulario
      pero la lista de tarea lo estoy manejando en otro 
      componente por eso debo agregar esta tarea no agregada
      debo agregarla al array de tareas, esta tarea que recien 
      esta insertada en la base de datos
    */

    this.softSkillService.addSoftSkill(softSkill).subscribe((softSkill)=>(
        this.softSkills.push(softSkill)
    ))
    //agrego la nueva tarea y se inserta en la base de datos

  }
}
