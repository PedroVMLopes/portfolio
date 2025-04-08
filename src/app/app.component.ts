import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/header/navbar/navbar.component";
import { IntroductionComponent } from "./components/introduction/introduction.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, IntroductionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
