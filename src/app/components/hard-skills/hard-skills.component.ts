import { Component, OnInit } from '@angular/core';

import { HardSkillService } from '../../service/hard-skill.service';

import {HardSkill} from '../../HardSkill' //interface

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css']
})
export class HardSkillsComponent implements OnInit {

  hardSkills: HardSkill[] = [];
  
  constructor(  
    /* inicializamos nuestro servicio */
    private hardSkillService: HardSkillService
    ){}

  ngOnInit(): void {
    /* cuando se monte el componente, 
    vamos a llamar al  servicio, 
    guardamos la lista de tareas dentro de HardSkill */
    this.hardSkillService.getHardSkills().subscribe((hardSkills)=>(
        this.hardSkills = hardSkills)
      );
    /* el componente ya no esta manejando 
    la logica de las tareas */
    /*=> se agrego porque es asinbcronico la carga de la base de datos */
    /* metodo subscribe de los observables */
    /* Leemos de nuestro archivo de tareas
    obtenemos la lista de tareas a traves de un servicio 
    cuando se monta el componente de tarea */
  }

  deleteHardSkill(hardSkill: HardSkill){
    /*console.log("deleteHardSkill");*/
    this.hardSkillService.deleteHardSkill(hardSkill)
      .subscribe(
        ()=>(
        this.hardSkills = this.hardSkills.filter( (t) => {
        /*console.log("hardSkill delete");*/
        return t.id !== hardSkill.id
        })
      ))
  }

  toggleReminder(hardSkill: HardSkill){
    //hardSkill.reminder = !hardSkill.reminder;
    /*console.log(hardSkill.reminder)*/
    this.hardSkillService.updateHardSkillReminder(hardSkill).subscribe();
    /*la logica lo manejamos en comppnenete y 
    se lo pasamos al servicio para que aga la terea*/
    /*el servicio habla con la base de datos
    la logica lo manejamos en el componenete*/
  }

  addHardSkill(hardSkill: HardSkill){
    //console.log(hardSkill); 
    // recibimos los datos de la tarea
    // esta tarea que recibimos aca deberiamos 
    // pasarla a un servicio que nos permita guardarla en la base de datos
    /* devuelve la tarea, la tarea se creo en un formulario
      pero la lista de tarea lo estoy manejando en otro 
      componente por eso debo agregar esta tarea no agregada
      debo agregarla al array de tareas, esta tarea que recien 
      esta insertada en la base de datos
    */

    this.hardSkillService.addHardSkill(hardSkill).subscribe((hardSkill)=>(
        this.hardSkills.push(hardSkill)
    ))
    //agrego la nueva tarea y se inserta en la base de datos

  }

}
