import { Component, OnInit } from '@angular/core';
import { Employeer } from 'src/app/models/employeer';

@Component({
  selector: 'app-employeers-list',
  templateUrl: './employeers-list.component.html',
  styleUrls: ['./employeers-list.component.css']
})
export class EmployeersListComponent implements OnInit {

  listEmployeers: Employeer[] = [
    {
      identification: 1,
      name: 'Tony',
      lastname: 'Stark',
      gender: 'Male',
      salary: 1000
    },
    {
      identification: 2,
      name: 'Barry',
      lastname: 'Allen',
      gender: 'Male',
      salary: 2000
    },
    {
      identification: 3,
      name: 'Iris',
      lastname: 'West',
      gender: 'Female',
      salary: 3000
    },
    {
      identification: 4,
      name: 'Steve',
      lastname: 'Rogers',
      gender: 'Male',
      salary: 4000
    },
    {
      identification: 5,
      name: 'Peggy',
      lastname: 'Carter',
      gender: 'Female',
      salary: 5000
    },
    {
      identification: 6,
      name: 'Tom',
      lastname: 'Barton',
      gender: 'Male',
      salary: 6000
    },
    {
      identification: 7,
      name: 'Natasha',
      lastname: 'Romanoff',
      gender: 'Female',
      salary: 7000
    }
  ];

  radioButtonSelected = 'All';

  constructor() { }

  ngOnInit(): void {
  }

  getEmployeersCount():number{
    return this.listEmployeers.length;
  }

  getFemaleCount():number{
    return this.listEmployeers.filter(list=>list.gender === 'Female').length;
  }

  getMaleCount():number{
    return this.listEmployeers.filter(list=>list.gender === 'Male').length;
  }

  employeersCountRadioButtonChange(radioButtonSelected:string):void{
    this.radioButtonSelected = radioButtonSelected;
  }
}
