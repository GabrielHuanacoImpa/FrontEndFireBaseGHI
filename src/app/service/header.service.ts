import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private apiUrlTraer = environment.apiUrl+'personas/traer';

  constructor(private http: HttpClient) { 
    console.log('Servicio HTTTP');
  }



  getHeader(): any {
    //return this.http.get('http://localhost:8080/personas/traer');
    
    return this.http.get(this.apiUrlTraer);
  }
}
