import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DisplayTaskComponent } from './display-task/display-task.component';
import { TaskDetails } from '../../Models/TaskDetails';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule, DisplayTaskComponent],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css',
})
export class CreateTaskComponent {
  tasks: TaskDetails[] = [];

  @ViewChild('formReference') form: NgForm;

  // @Output() createdTask: EventEmitter<TaskDetails> =
  //   new EventEmitter<TaskDetails>();

  onFormSubmit() {
    console.log(this.form);
    console.log('Form submitted');
    console.log('title:', this.form.value.title);
    console.log('description:', this.form.value.description);
    console.log('assignedTo:', this.form.value.assignedTo);
    const task = {
      title: this.form.value.title,
      description: this.form.value.description,
      assignedTo: this.form.value.assignedTo,
    };
    console.log(task);
    this.tasks.push(task);
    console.log(task);
  }
}
