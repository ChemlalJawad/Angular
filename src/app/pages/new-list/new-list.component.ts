import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from 'src/app/task-service.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {
  projects: any;
  constructor(private taskService: TaskServiceService) { }
  ngOnInit() {
    this.taskService.getProjectLists().subscribe((projects: any) => {
      this.projects = projects;
    })
  }

  createNewTask(title: string, description: string, projectId: string) {
    return this.taskService.createList(title, description, projectId).subscribe((response: any) => {
      console.log(response);
      //redirect vers /lists/ID
    });
  }
}
