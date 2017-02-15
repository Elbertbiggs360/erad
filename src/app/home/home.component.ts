import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MdDialog} from '@angular/material';

import { Task } from '../shared/task';
import { TaskService } from '../shared/task.service';

import { User } from '../shared/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [TaskService, UserService]
})
export class HomeComponent implements OnInit {

  allTasks: Task[];
  public authUser: User[];
  priority: String;
  errorMessage: any;

  constructor(
    private taskService: TaskService, 
    public dialog: MdDialog,
    private userService: UserService
    ) {}


  ngOnInit(): void {
    this.getUserDetails();
    this.getPriority();
    this.getAllTasks();
  }

  openDialog() {
    this.dialog.open(DialogOverviewExampleDialog);
  }
  
  getUserDetails() {
    this.userService.getUser()
    .subscribe(result => {
            if (result === true) {
                this.authUser = this.userService.authUser;
            } else {
                this.getUserDetails();
            }
        });
  }

  getAllTasks(): void {
    this.taskService.getTasks().subscribe(
      tasks => this.allTasks = tasks,
      error => this.errorMessage = error);
  }

  getPriority() {
    this.priority = 'high';
  }

}

@Component({
  selector: 'dialog-overview-example-dialog'
})
export class DialogOverviewExampleDialog {}