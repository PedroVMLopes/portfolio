import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPersonCirclePlus, faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tabletop',
  imports: [FontAwesomeModule, TranslateModule],
  templateUrl: './tabletop.component.html',
  styleUrl: './tabletop.component.scss'
})
export class TabletopComponent {
  faPersonCirclePlus = faPersonCirclePlus;
  faGithub = faGithub;
  faDiceD20 = faDiceD20;
}
