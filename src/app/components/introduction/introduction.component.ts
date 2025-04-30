import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [TranslateModule, FontAwesomeModule],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {
  faAngleDown = faAngleDown;

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
