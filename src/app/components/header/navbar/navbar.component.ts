import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  imports: [TranslateModule, NgIf, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  /* Icons */
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;
  faEnvelope = faEnvelope;
  faBriefcase = faBriefcase;

  isEnglish = false;
  showToast = false;
  isDarkTheme = false;

  constructor(private translate: TranslateService) {
    this.isEnglish = this.translate.currentLang === 'en-US';
  }

  toggleLanguage() {
    this.isEnglish = !this.isEnglish;
    const newLang = this.isEnglish ? 'en-US' : 'pt-BR';
    this.translate.use(newLang);
  }

  copyEmail() {
    const email = "pedrovitormlopes@gmail.com";
    navigator.clipboard.writeText(email)
    .then(() => {
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    })
  }

  copyPhoneNumber() {
    const phoneNumber = "+55 11 952304438";
    navigator.clipboard.writeText(phoneNumber)
    .then(() => {
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    })
  }

  toggleTheme(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    const newTheme = isChecked ? 'portfolioDark' : 'portfolio';
    document.documentElement.setAttribute('data-theme', newTheme);
  }
}


