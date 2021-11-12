import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent implements OnInit {

  tasks : any = [];

  constructor(private taskinfo:TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskinfo.getTasks();
  }
  }
