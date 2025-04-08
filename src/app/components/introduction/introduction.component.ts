import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['br', 'en']);
    this.translate.setDefaultLang('br');
    this.translate.use('br');
  }
}
