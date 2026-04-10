import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDetail } from './product-detail/product-detail';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductDetail],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo-angular-git');
}
