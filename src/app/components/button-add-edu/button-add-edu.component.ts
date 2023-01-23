//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
@Component({
  selector: 'app-button-add-edu',
  templateUrl: './button-add-edu.component.html',
  styleUrls: ['./button-add-edu.component.css']
})
export class ButtonAddEduComponent implements OnInit {
  @Input() text: string = "";
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  
  onClick(){
    //console.log("click!");
    this.btnClick.emit(); //para sacar para afuera
  }


}
