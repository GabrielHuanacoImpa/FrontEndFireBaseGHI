import { Injectable } from '@angular/core';
/*esto permite hacer llamados get y post a nuestro 
servidor montado en el puerto 5000*/
import {HttpClient, HttpHeaders} from '@angular/common/http';
/* lo siguieten es para decir que nuestro metodo es asincronico 
getIdiomas(), por que asi es en la vida real*/
import {Observable, of} from 'rxjs'; /* asincronico, la base de datos lleva su tiempo en responder a la peticion*/
import {Idioma} from '../Idioma' //interface
import {IDIOMAS} from '../mock-idiomas'; //lista de tareas

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
export class IdiomaService {

  //private apiUrl = 'http://localhost:5006/idiomas';
  //private apiUrl = 'http://localhost:8080/idioma/traer';
/*
  private apiUrl = 'http://localhost:8080/'+'idioma/traer';
  private apiUrlEditar= 'http://localhost:8080/'+'idioma/editar';
  private apiUrlDelete= 'http://localhost:8080/'+'idioma/borrar';
  private apiCrear = 'http://localhost:8080/'+'idioma/crear';
*/

private apiUrlTraer = environment.apiUrl+'idioma/traer';
private apiUrlEditar= environment.apiUrl+'idioma/editar';
private apiUrlDelete= environment.apiUrl+'idioma/borrar';
private apiCrear = environment.apiUrl+'idioma/crear';

  constructor(
    /*inicializamos el metodo*/
    private http: HttpClient
  ) { }

  /* devuelve la lista de tarea */
  getIdiomas(): Observable<Idioma[]> {
    return this.http.get<Idioma[]>(this.apiUrlTraer)
  }
  deleteIdioma(idioma: Idioma): Observable<Idioma> {
    /*const url = '${this.apiUrl}/${idioma.id}';*/
    const url = `${this.apiUrlDelete}/${idioma.id}`;
    return this.http.delete<Idioma>(url)
  }

  updateIdiomaReminder(idioma: Idioma): Observable<Idioma> {
    const url = `${this.apiUrlEditar}/${idioma.id}`;
    return this.http.put<Idioma>(url, idioma, httpOptions)
    /*lo maneja como json : indicado por httpOptions*/
    /*es para informarle al Backend que le estamos enviando un json en root*/
  }

  addIdioma(idioma: Idioma): Observable<Idioma> {
    return this.http.post<Idioma>(this.apiCrear, idioma, httpOptions);
  }
}
