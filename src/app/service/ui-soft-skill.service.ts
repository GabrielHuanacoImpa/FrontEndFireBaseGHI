import { Injectable } from '@angular/core';
import {Observable, Subject } from 'rxjs';
// sirve para encadenar eventos
// el fin es escuchar cambios en las
// funciones sincronicas o asincronicas


@Injectable({
  providedIn: 'root'
})
export class UiSoftSkillService {

  private showAddSoftSkill: boolean = false; // se muestra o no 
  private subjet = new Subject<any>(); // poder escuchar eventos del templey



  constructor() { }
  // devuelve el valor opuesto para tener el efecto toogle de cambiar
  // tenemos la logica para cambiar el valor de showAddSoftSkill
  toggleAddSoftSkill(): void {
    //console.log("toggleAddSoftSkill");
    this.showAddSoftSkill = !this.showAddSoftSkill;
    this.subjet.next(this.showAddSoftSkill);
  }


  onToggle():Observable<any> {
    return this.subjet.asObservable();
  }

}
