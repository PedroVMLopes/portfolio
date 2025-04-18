import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFigma, faReact, faGit, faNode } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faCode, faWater, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main-technologies',
  imports: [FontAwesomeModule, TranslateModule],
  templateUrl: './main-technologies.component.html',
  styleUrl: './main-technologies.component.scss'
})
export class MainTechnologiesComponent {
  faGlobe = faGlobe;
  faFigma = faFigma;
  faCode = faCode;
  faReact = faReact;
  faWater = faWater;
  faGit = faGit;
  faDatabase = faDatabase;
  faNode = faNode;

}
