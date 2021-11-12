import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  number :any;

  constructor(private taskNumber:TaskService) { }

  ngOnInit(): void {
    this.number = this.taskNumber.getNumber();
  }

}
