import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterPage } from "./pages/counter/counter-page";
import { Navbar } from "./components/shared/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterPage, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bases');
}
