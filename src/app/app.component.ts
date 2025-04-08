import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/header/navbar/navbar.component";
import { IntroductionComponent } from "./components/introduction/introduction.component";
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, IntroductionComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'portfolio';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['pt-BR', 'en-US']);
    this.translate.setDefaultLang('pt-BR');
    this.translate.use('pt-BR');
  }
}

