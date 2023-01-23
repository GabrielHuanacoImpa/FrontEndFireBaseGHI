import { Component, OnInit } from '@angular/core';

import {HeaderService} from 'src/app/service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerList: any  = [];
  constructor(private HeaderService: HeaderService){
    console.log('El componente se ha creado');
  }
  /*
  ngOnInit es el método que nos permitirá interaccionar 
  con el componente una vez se ha inicializado dicho componente.
  */
  ngOnInit(): void {
      console.log('El componente se ha inicializado');
      //this.HeaderService.getheader().subscribe((response: any) => console.log(response));
      this.HeaderService.getHeader().subscribe((response: any) => this.headerList = response);
  }


}
