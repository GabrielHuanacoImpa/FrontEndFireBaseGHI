import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Proyecto } from '../../Proyecto';


//para boton
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-pro',
  templateUrl: './add-pro.component.html',
  styleUrls: ['./add-pro.component.css']
})
export class AddProComponent implements OnInit {

  @Output() onAddPro:EventEmitter<Proyecto> = new EventEmitter();

  id: number=0;
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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.nombre_proyecto.length === 0) {
      alert("Por favor ingrese nombre de la empresa");
      return
    }


    
    const {id, nombre_proyecto,fecha_inicioP,fecha_finP,descripcionP, link,url_imagenes, domicilio, tipo_ocupacion, ultima_actualizacion, url_image_logo, reminder,persona_id} = this
    const newPro = {id, nombre_proyecto,fecha_inicioP,fecha_finP,descripcionP, link,url_imagenes, domicilio, tipo_ocupacion, ultima_actualizacion, url_image_logo, reminder,persona_id}
    
   
    this.onAddPro.emit(newPro); //envia objeto Experiencia fuera del componenete, lo emite 


}

}
