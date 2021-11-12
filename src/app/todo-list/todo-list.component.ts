import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks : any = [];

  constructor(private taskinfo:TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskinfo.getTasks();
  }

}
