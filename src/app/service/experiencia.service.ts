import { Injectable } from '@angular/core';
/*esto permite hacer llamados get y post a nuestro 
servidor montado en el puerto 5002*/
import {HttpClient, HttpHeaders} from '@angular/common/http';
/* lo siguieten es para decir que nuestro metodo es asincronico 
getTasks(), por que asi es en la vida real*/
import {Observable, of} from 'rxjs'; /* asincronico, la base de datos lleva su tiempo en responder a la peticion*/
import {Experiencia} from '../Experiencia' //interface
import {EXPERIENCIAS} from '../mock-experiencias'; //lista de tareas

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
export class ExperienciaService {
  //private apiUrl = 'http://localhost:5002/experiencias';
  /*
  private apiUrl = 'http://localhost:8080/experiencia/traer';
  private apiUrlCrear='http://localhost:8080/experiencia/crear';
  private apiUrlEditar='http://localhost:8080/experiencia/editar';
  private apiUrlDelete='http://localhost:8080/experiencia/borrar'

  private apiUrl = environment.APIURL+'experiencia/traer';
  private apiUrlCrear= environment.APIURL+'experiencia/crear';
  private apiUrlEditar= environment.APIURL+'experiencia/editar';
  private apiUrlDelete= environment.APIURL+'experiencia/borrar'
*/
/*
private apiUrl = 'http://localhost:8080/'+'experiencia/traer';
private apiUrlCrear= 'http://localhost:8080/'+'experiencia/crear';
private apiUrlEditar= 'http://localhost:8080/'+'experiencia/editar';
private apiUrlDelete= 'http://localhost:8080/'+'experiencia/borrar'
*/

private apiUrlTraer = environment.apiUrl+'experiencia/traer';
private apiUrlCrear= environment.apiUrl+'experiencia/crear';
private apiUrlEditar= environment.apiUrl+'experiencia/editar';
private apiUrlDelete= environment.apiUrl+'experiencia/borrar'



  constructor(
    /*inicializamos el metodo*/
    private http: HttpClient
  ) { }

  /* devuelve la lista de tarea */
  getExperiencias(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.apiUrlTraer)
  }
  deleteExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    /*const url = '${this.apiUrl}/${task.id}';*/
    const url = `${this.apiUrlDelete}/${experiencia.id}`;
    console.log(url);
    return this.http.delete<Experiencia>(url)
  }

  updateExperienciaReminder(experiencia: Experiencia): Observable<Experiencia> {
    const url = `${this.apiUrlEditar}/${experiencia.id}`;
    return this.http.put<Experiencia>(url, experiencia, httpOptions)
    //return this.http.put<Experiencia>(url, experiencia)
    /*lo maneja como json : indicado por httpOptions*/
    /*es para informarle al Backend que le estamos enviando un json en root*/
  }

  addExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(this.apiUrlCrear, experiencia, httpOptions);
  }
}
