import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyToDo\'s';
  todos = [
    {
      label : 'Bring Milk',
      action : false,
      priority : 3
    },
    {
      label : 'Pay Mobile bill',
      action : false,
      priority : 2
    },
    {
      label : 'Clean house',
      action : true,
      priority : 5
    },
    {
      label : 'Do Laundry',
      action : false,
      priority : 4
    },
    {
      label : 'Project',
      action : false,
      priority : 1
    },
  ];

  addToDo(newToDoLabel){
    var newToDo = {
      label : newToDoLabel,
      priority : 6,
      action : true
    };

    this.todos.push(newToDo);
  }

  deleteToDo(todo){
    this.todos = this.todos.filter(t => t.label != todo.label);
  }
}
