import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  taskArray :any[] = [
    {
      name:'Goal Management',
      description:'Comment Due in Goal 3',

    },
    {
      name:'360 Degree Survey',
      description:'Rahul invited you to give him 360 degree feedback ',

    },
    {
      name:'360 Degree Survey',
      description:'Rahul invited you to give him 360 degree feedback ',

    },
    {
      name:'360 Degree Survey',
      description:'Rahul invited you to give him 360 degree feedback ',

    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
