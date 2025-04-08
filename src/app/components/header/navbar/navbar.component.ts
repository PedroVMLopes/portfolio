import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isEnglish = false;

  constructor(private translate: TranslateService) {
    this.isEnglish = this.translate.currentLang === 'en-US';
  }

  toggleLanguage() {
    this.isEnglish = !this.isEnglish;
    const newLang = this.isEnglish ? 'en-US' : 'pt-BR';
    this.translate.use(newLang);
  }
}


