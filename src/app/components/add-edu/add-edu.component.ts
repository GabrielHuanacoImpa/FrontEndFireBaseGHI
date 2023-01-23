import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Educacion } from '../../Educacion';

import { UieduService } from 'src/app/service/uiedu.service';

//para boton
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-edu',
  templateUrl: './add-edu.component.html',
  styleUrls: ['./add-edu.component.css']
})
export class AddEduComponent implements OnInit {
  @Output() onAddEdu:EventEmitter<Educacion> = new EventEmitter();

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
  showAddEdu: boolean = false; // se muestra o no 
  subscription?: Subscription;

  constructor(
    private uiEduService: UieduService

  ) { 

            // Boton Alta
            this.subscription = this.uiEduService.onToggle()
            .subscribe(value => this.showAddEdu = value);
        //cuando presiono boton cambia el valor y color de add a close
  

        // Fin Boton Alta

  }

  ngOnInit(): void {
  }

  onSubmit(){
      if(this.institucion.length === 0) {
        alert("Por favor ingrese una experiencia educativa");
        return
      }
  

      
      const {institucion,titulo,domicilio,fecha_inicio,fecha_fin,image_institucion,ultima_actualizacion,reminder,persona_id} = this
      const newEdu = {institucion,titulo,domicilio,fecha_inicio,fecha_fin,image_institucion,ultima_actualizacion,reminder,persona_id}
      
     
      this.onAddEdu.emit(newEdu); //envia objeto Educacion fuera del componenete, lo emite
  }
}
