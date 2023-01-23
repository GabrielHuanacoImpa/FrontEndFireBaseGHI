import { Injectable } from '@angular/core';
/*esto permite hacer llamados get y post a nuestro 
servidor montado en el puerto 5000*/
import {HttpClient, HttpHeaders} from '@angular/common/http';
/* lo siguieten es para decir que nuestro metodo es asincronico 
getProyectos(), por que asi es en la vida real*/
import {Observable, of} from 'rxjs'; /* asincronico, la base de datos lleva su tiempo en responder a la peticion*/
import {Proyecto} from '../Proyecto' //interface
import {PROYECTOS} from '../mock-proyectos'; //lista de tareas

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
export class ProyectoService {

  //private apiUrl = 'http://localhost:5007/proyectos';
  /*
  
  private apiUrl = environment.APIURL+'proyecto/traer';
  
  private apiUrlEditar= environment.APIURL+'proyecto/editar';
  private apiUrlDelete= environment.APIURL+'proyecto/borrar';
  private apiCrear = environment.APIURL+'proyecto/crear';
*/
/*
private apiUrl = 'http://localhost:8080/'+'proyecto/traer';
  
private apiUrlEditar= 'http://localhost:8080/'+'proyecto/editar';
private apiUrlDelete= 'http://localhost:8080/'+'proyecto/borrar';
private apiCrear = 'http://localhost:8080/'+'proyecto/crear';
*/



private apiUrlTraer = environment.apiUrl+'proyecto/traer';
  
private apiUrlEditar= environment.apiUrl+'proyecto/editar';
private apiUrlDelete= environment.apiUrl+'proyecto/borrar';
private apiCrear = environment.apiUrl+'proyecto/crear';

  constructor(
    /*inicializamos el metodo*/
    private http: HttpClient
  ) { }

  /* devuelve la lista de tarea */
  getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.apiUrlTraer)
  }
  deleteProyecto(proyecto: Proyecto): Observable<Proyecto> {
    /*const url = '${this.apiUrl}/${proyecto.id}';*/
    const url = `${this.apiUrlDelete}/${proyecto.id}`;
    return this.http.delete<Proyecto>(url)
  }

  updateProyectoReminder(proyecto: Proyecto): Observable<Proyecto> {
    const url = `${this.apiUrlEditar}/${proyecto.id}`;
    return this.http.put<Proyecto>(url, proyecto, httpOptions)
    /*lo maneja como json : indicado por httpOptions*/
    /*es para informarle al Backend que le estamos enviando un json en root*/
  }

  addProyecto(proyecto: Proyecto): Observable<Proyecto> {
    //console.log('ENTORNO:'+environment.APIURL);
    return this.http.post<Proyecto>(this.apiCrear, proyecto, httpOptions);
    
  }
}
