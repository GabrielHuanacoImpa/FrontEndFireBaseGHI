//import { Component, OnInit } from '@angular/core';

import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { Proyecto } from '../../Proyecto';

//import { UieduService } from 'src/app/service/uiedu.service';
import {PROYECTOS} from '../../mock-proyectos';

import { ProyectoService } from '../../service/proyecto.service';
//para boton
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-edit-pro',
  templateUrl: './edit-pro.component.html',
  styleUrls: ['./edit-pro.component.css']
})
export class EditProComponent implements OnInit {

  @Output() onEdit:EventEmitter<Proyecto> = new EventEmitter();
  @Input() proyecto: Proyecto = PROYECTOS[0];

  id?: number=0;
  nombre_proyecto: string="";
  fecha_inicioP: Date= new Date("0000-00-00");
  fecha_finP:Date= new Date("0000-00-00");
  descripcionP: string="";
  link: string="";
  url_imagenes: string="";
  domicilio: string="";
  tipo_ocupacion: string="";
  ultima_actualizacion: Date= new Date("0000-00-00");
  url_image_logo: string="";
  reminder: number = 1;
  persona_id: number = 1;

  subscription?: Subscription;


  constructor(
    private proyectoService: ProyectoService

  ) { }

  ngOnInit(): void {
    this.id=this.proyecto.id;
    this.nombre_proyecto=this.proyecto.nombre_proyecto;
    this.fecha_inicioP=this.proyecto.fecha_inicioP;
    this.fecha_finP=this.proyecto.fecha_finP;
    this.descripcionP=this.proyecto.descripcionP;
    this.link=this.proyecto.link;
    this.url_imagenes=this.proyecto.url_imagenes;
    this.domicilio=this.proyecto.domicilio;
    this.tipo_ocupacion=this.proyecto.tipo_ocupacion;
    this.ultima_actualizacion=this.proyecto.ultima_actualizacion;
    this.url_image_logo=this.proyecto.url_image_logo;
    this.reminder=this.proyecto.reminder;
    this.persona_id=this.proyecto.persona_id;
  

  }

  onSubmit(){

    const {id, nombre_proyecto,fecha_inicioP,fecha_finP,descripcionP, link,url_imagenes, domicilio, tipo_ocupacion, ultima_actualizacion, url_image_logo, reminder,persona_id} = this
    const newPro = {id, nombre_proyecto,fecha_inicioP,fecha_finP,descripcionP, link,url_imagenes, domicilio, tipo_ocupacion, ultima_actualizacion, url_image_logo, reminder,persona_id}
    
   
    this.proyectoService.updateProyectoReminder(newPro).subscribe(response=>{
      //console.log(response);
      this.onEdit.emit(response);});
     //envia objeto Educacion fuera del componenete, lo emite

}

}
