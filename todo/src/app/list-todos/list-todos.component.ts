import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    { id: 1, description:'learn dance'},
    { id: 1, description:'learn kung fu'},
    { id: 1, description:'learn swimming'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
