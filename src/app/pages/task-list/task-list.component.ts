import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../../task-service.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: any;
  projects: any;
  id: any;
  constructor(private taskService: TaskServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(x => {
      let id = x.get('taskId');
      this.id = id;
    });


    this.taskService.getProjectLists().subscribe((projects: any) => {
      this.projects = projects;
    })

  }

  getTask(task: any) {
    console.log(task)
    this.tasks = task
  }

}
