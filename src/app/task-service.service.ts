import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private webRequestService: WebRequestService) { }

  createList(title: string, description: string, projectId: string) {
    //We want to send a web request to create a list
    return this.webRequestService.post('tasks', {
      title: title,
      description: description,
      projectId: projectId,
      creatorId: 2
    })
  }

  getLists() {
    return this.webRequestService.get('tasks');
  }

  getProjectLists() {
    return this.webRequestService.get('projects');
  }

  getProject(projectId: string) {
    return this.webRequestService.get(`projects/${projectId}`);
  }
}
