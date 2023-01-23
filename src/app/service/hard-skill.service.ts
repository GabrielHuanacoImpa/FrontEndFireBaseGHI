import { Injectable } from '@angular/core';
/*esto permite hacer llamados get y post a nuestro 
servidor montado en el puerto 5000*/
import {HttpClient, HttpHeaders} from '@angular/common/http';
/* lo siguieten es para decir que nuestro metodo es asincronico 
getHardSkills(), por que asi es en la vida real*/
import {Observable, of} from 'rxjs'; /* asincronico, la base de datos lleva su tiempo en responder a la peticion*/
import {HardSkill} from '../HardSkill' //interface
import {HARDSKILLS} from '../mock-hardSkills'; //lista de tareas

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
export class HardSkillService {

  //private apiUrl = 'http://localhost:5004/hard-Skills';
  //private apiUrl = 'http://localhost:8080/hardskills/traer';
  /*
  private apiUrl = environment.APIURL+'hardskills/traer';
  private apiUrlEditar= environment.APIURL+'hardskills/editar';
  private apiUrlDelete= environment.APIURL+'hardskills/borrar';
  private apiCrear = environment.APIURL+'hardskills/crear';
*/
/*
private apiUrl = 'http://localhost:8080/'+'hardskills/traer';
private apiUrlEditar= 'http://localhost:8080/'+'hardskills/editar';
private apiUrlDelete= 'http://localhost:8080/'+'hardskills/borrar';
private apiCrear = 'http://localhost:8080/'+'hardskills/crear';
*/


private apiUrlTraer = environment.apiUrl+'hardskills/traer';
private apiUrlEditar= environment.apiUrl+'hardskills/editar';
private apiUrlDelete= environment.apiUrl+'hardskills/borrar';
private apiCrear = environment.apiUrl+'hardskills/crear';

  constructor(
    /*inicializamos el metodo*/
    private http: HttpClient
  ) { }

  /* devuelve la lista de tarea */
  getHardSkills(): Observable<HardSkill[]> {
    return this.http.get<HardSkill[]>(this.apiUrlTraer)
  }
  deleteHardSkill(hardSkill: HardSkill): Observable<HardSkill> {
    /*const url = '${this.apiUrl}/${hardSkill.id}';*/
    const url = `${this.apiUrlDelete}/${hardSkill.id}`;
    return this.http.delete<HardSkill>(url)
  }

  updateHardSkillReminder(hardSkill: HardSkill): Observable<HardSkill> {
    const url = `${this.apiUrlEditar}/${hardSkill.id}`;
    return this.http.put<HardSkill>(url, hardSkill, httpOptions)
    /*lo maneja como json : indicado por httpOptions*/
    /*es para informarle al Backend que le estamos enviando un json en root*/
  }

  addHardSkill(hardSkill: HardSkill): Observable<HardSkill> {
    return this.http.post<HardSkill>(this.apiCrear, hardSkill, httpOptions);
  }
}
