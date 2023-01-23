//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Idioma } from '../../Idioma';

//para boton
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-idioma',
  templateUrl: './add-idioma.component.html',
  styleUrls: ['./add-idioma.component.css']
})
export class AddIdiomaComponent implements OnInit {

  @Output() onAddIdioma:EventEmitter<Idioma> = new EventEmitter();
  
  id: number=0;
  habilidadI: string="";
  nivelI: number=0;
  persona_id: number=1;

  subscription?: Subscription;

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(){
    if(this.habilidadI.length === 0) {
      alert("Por favor ingrese nombre de la habilidad");
      return
    }


    
    const {id, habilidadI, nivelI, persona_id} = this
    const newIdio = {id, habilidadI, nivelI, persona_id}
    
   
    this.onAddIdioma.emit(newIdio); //envia objeto Experiencia fuera del componenete, lo emite 

}


}
