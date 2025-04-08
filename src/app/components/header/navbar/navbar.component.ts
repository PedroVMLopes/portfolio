import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['br', 'en']);
    this.translate.setDefaultLang('br');
    this.translate.use('br');
  }
}
