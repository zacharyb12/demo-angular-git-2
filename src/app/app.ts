import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Maliste } from './maliste/maliste';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Maliste],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo-angular-git');
}
