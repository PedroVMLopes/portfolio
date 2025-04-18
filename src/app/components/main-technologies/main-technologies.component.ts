import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFigma } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-technologies',
  imports: [FontAwesomeModule],
  templateUrl: './main-technologies.component.html',
  styleUrl: './main-technologies.component.scss'
})
export class MainTechnologiesComponent {
  faGlobe = faGlobe;
  faFigma = faFigma;

}
