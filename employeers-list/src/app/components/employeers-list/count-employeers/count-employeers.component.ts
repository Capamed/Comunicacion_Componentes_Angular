import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ValuesEmployeers } from 'src/app/models/employeer';

@Component({
  selector: 'app-count-employeers',
  templateUrl: './count-employeers.component.html',
  styleUrls: ['./count-employeers.component.css']
})
export class CountEmployeersComponent implements OnInit {

  @Input() valuesEmployeers:ValuesEmployeers = {all: 0,femaleCount: 0,maleCount: 0};
  @Output() countRadioButtonChange = new EventEmitter<string>();

  radioButtonSelected = 'All';

  constructor() { 
  }

  ngOnInit(): void {
  }

  radioChange(){
    this.countRadioButtonChange.emit(this.radioButtonSelected);
  }

}
