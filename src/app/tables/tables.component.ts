import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TablesComponent implements OnInit {
  users: User[];

  cols: any[];
  constructor() { }

  ngOnInit() {
    this.users = [
      { id: '1', name: 'kiran',email:'kiran@gmail.com' },
      { id: '2', name: 'tom',email:'tom@gmail.com' },
      { id: '3', name: 'john',email:'john@gmail.com' },
      { id: '4', name: 'Frank',email:'frank@gmail.com' },

  ];
    this.cols = [
        { field: 'id', header: 'Id' },
        { field: 'name', header: 'Name' },
        { field: 'email', header: 'Email' },
    ];
  }

}
export interface User {
  id;
  name;
  email;
}