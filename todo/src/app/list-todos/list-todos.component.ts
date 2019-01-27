import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    { id: 1, description:'learn dance'},
    { id: 2, description:'learn kung fu'},
    { id: 3, description:'learn swimming'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
