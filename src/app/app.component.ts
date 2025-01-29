import { Component } from '@angular/core';
import { CreateTaskComponent } from './create-task/create-task.component';
import { DisplayTaskComponent } from './create-task/display-task/display-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CreateTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-project';
}
