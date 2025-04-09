import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [TranslateModule, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isEnglish = false;
  showToast = false;

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
}


