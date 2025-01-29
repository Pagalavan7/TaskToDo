import { Component, Input } from '@angular/core';
import { TaskDetails } from '../../../Models/TaskDetails';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-task.component.html',
  styleUrl: './display-task.component.css',
})
export class DisplayTaskComponent {
  @Input() tasks: TaskDetails[];
}
