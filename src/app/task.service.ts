import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  num = 4;

  public task = [
   {
     "name" : "SL lab 11 Assignment",
     "id" : 1,
     "details" : "Deadline :  12 Nov at 11:59 pm"
   },
   {
     "name" : "SL lab 12 Assignment",
     "id" : 2,
     "details" : "Deadline : 13 Nov at 11:59 pm"
   },
   {
     "name" : "Graph Theory Quiz",
     "id" : 3,
     "details" : "Deadline : 15 Nov at 12:45 pm"
   },
   {
     "name" : "AI-DS Quiz",
     "id" : 4,
     "details" : "Deadline : 16 Nov at 6:10 pm"
   }
 ];

 getTasks(){
   return this.task;
 }

 getNumber(){
   return this.num;
 }

  constructor() { }
}
