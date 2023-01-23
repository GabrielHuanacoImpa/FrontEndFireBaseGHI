import { Injectable } from '@angular/core';
/*esto permite hacer llamados get y post a nuestro 
servidor montado en el puerto 5000*/
import {HttpClient, HttpHeaders} from '@angular/common/http';
/* lo siguieten es para decir que nuestro metodo es asincronico 
getSoftSkills(), por que asi es en la vida real*/
import {Observable, of} from 'rxjs'; /* asincronico, la base de datos lleva su tiempo en responder a la peticion*/
import {SoftSkill} from '../SoftSkill' //interface
import {SOFTSKILLS} from '../mock-softSkills'; //lista de tareas

//para usar variables globales de URL
import { environment } from '../../environments/environment';

/*El servicio ya maneja todas las tareas ya no el componente*/
/* El componente solo llama a los servicios */
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
} /*mandamos un json al servidor*/


@Injectable({
  providedIn: 'root'
})
export class SoftSkillService {

  //private apiUrl = 'http://localhost:5005/soft-Skills';
  //private apiUrl = 'http://localhost:8080/softskills/traer';
/*
  private apiUrl = environment.APIURL+'softskills/traer';
  private apiUrlEditar= environment.APIURL+'softskills/editar';
  private apiUrlDelete= environment.APIURL+'softskills/borrar';
  private apiCrear = environment.APIURL+'softskills/crear';
*/
/*
private apiUrl = 'http://localhost:8080/'+'softskills/traer';
private apiUrlEditar= 'http://localhost:8080/'+'softskills/editar';
private apiUrlDelete= 'http://localhost:8080/'+'softskills/borrar';
private apiCrear = 'http://localhost:8080/'+'softskills/crear';
*/



private apiUrlTraer = environment.apiUrl+'softskills/traer';
private apiUrlEditar= environment.apiUrl+'softskills/editar';
private apiUrlDelete= environment.apiUrl+'softskills/borrar';
private apiCrear = environment.apiUrl+'softskills/crear';

  constructor(
    /*inicializamos el metodo*/
    private http: HttpClient
  ) { }

  /* devuelve la lista de tarea */
  getSoftSkills(): Observable<SoftSkill[]> {
    return this.http.get<SoftSkill[]>(this.apiUrlTraer)
  }
  deleteSoftSkill(softSkill: SoftSkill): Observable<SoftSkill> {
    /*const url = '${this.apiUrl}/${softSkill.id}';*/
    const url = `${this.apiUrlDelete}/${softSkill.id}`;
    return this.http.delete<SoftSkill>(url)
  }

  updateSoftSkillReminder(softSkill: SoftSkill): Observable<SoftSkill> {
    const url = `${this.apiUrlEditar}/${softSkill.id}`;
    return this.http.put<SoftSkill>(url, softSkill, httpOptions)
    /*lo maneja como json : indicado por httpOptions*/
    /*es para informarle al Backend que le estamos enviando un json en root*/
  }

  addSoftSkill(softSkill: SoftSkill): Observable<SoftSkill> {
    return this.http.post<SoftSkill>(this.apiCrear, softSkill, httpOptions);
  }
}
