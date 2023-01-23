import { Injectable } from '@angular/core';
/*esto permite hacer llamados get y post a nuestro 
servidor montado en el puerto 5000*/
import {HttpClient, HttpHeaders} from '@angular/common/http';
/* lo siguieten es para decir que nuestro metodo es asincronico 
getEducacions(), por que asi es en la vida real*/
import {Observable, of} from 'rxjs'; /* asincronico, la base de datos lleva su tiempo en responder a la peticion*/
import {Educacion} from '../Educacion' //interface
import {EDUCACIONES} from '../mock-educaciones'; //lista de tareas
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

//para usar variables globales de URL
import { environment } from '../../environments/environment';

/*El servicio ya maneja todas las tareas ya no el componente*/
/* El componente solo llama a los servicios */
const httpOptions = {
  
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  
  //
  //body: { 'Content-Type': 'application/json' }
} /*mandamos un json al servidor*/


@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  //private apiUrl = 'http://localhost:5003/educaciones';
  //private apiUrl = 'http://localhost:8080/educacion/';
  //private apiUrlCrear = 'http://localhost:8080/educacion/crear';
 // private apiUrl1 = 'http://localhost:8080/educacion/crear';
 // private apiUrlDel = 'http://localhost:8080/educacion/borrar';
  //private apiUrlUpdateR = 'http://localhost:8080/educacion/editar';
/*
  private apiUrl = environment.APIURL+'educacion/traer';
  private apiUrlEditar= environment.APIURL+'educacion/editar';
  private apiUrlDelete= environment.APIURL+'educacion/borrar';
  private apiCrear = environment.APIURL+'educacion/crear';
*/
/*
private apiUrl = 'http://localhost:8080/'+'educacion/traer';
private apiUrlEditar= 'http://localhost:8080/'+'educacion/editar';
private apiUrlDelete= 'http://localhost:8080/'+'educacion/borrar';
private apiCrear = 'http://localhost:8080/'+'educacion/crear';
*/
//private host = 'https://seviciobackendghi.onrender.com';
/*
private apiUrl = 'https://seviciobackendghi.onrender.com/'+'educacion/traer';
private apiUrlEditar= 'https://seviciobackendghi.onrender.com/'+'educacion/editar';
private apiUrlDelete= 'https://seviciobackendghi.onrender.com/'+'educacion/borrar';
private apiCrear = 'https://seviciobackendghi.onrender.com/'+'educacion/crear';
*/

private apiUrlTraer = environment.apiUrl+'educacion/traer';
private apiUrlEditar=  environment.apiUrl+'educacion/editar';
private apiUrlDelete= environment.apiUrl+'educacion/borrar';
private apiCrear = environment.apiUrl+'educacion/crear';

  constructor(
    /*inicializamos el metodo*/
    private http: HttpClient
  ) { }

  /* devuelve la lista de tarea */
  getEducaciones(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.apiUrlTraer)
    
  }
  deleteEducacion(educacion: Educacion): Observable<Educacion> {
    /*const url = '${this.apiUrl}/${educacion.id}';*/
    const url2 = `${this.apiUrlDelete}/${educacion.id}`;
    console.log(url2);
    return this.http.delete<Educacion>(url2)
  }

  updateEducacionReminder(educacion: Educacion): Observable<Educacion> {
    const url = `${this.apiUrlEditar}/${educacion.id}`;
    //console.log(educacion);
    //return this.http.put<Educacion>(url, educacion, httpOptions)
    return this.http.put<Educacion>(url, educacion)
    /*lo maneja como json : indicado por httpOptions*/
    /*es para informarle al Backend que le estamos enviando un json en root*/
  }

  //private institucion : string="";
  addEducacion(educacion: Educacion): Observable<Educacion> {
        
    //console.log(JSON.stringify(educacion))

    return this.http.post<Educacion>(this.apiCrear, educacion, httpOptions);

  }



}
