import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tabletop',
  imports: [FontAwesomeModule, TranslateModule],
  templateUrl: './tabletop.component.html',
  styleUrl: './tabletop.component.scss'
})
export class TabletopComponent {
  faDiceD20 = faDiceD20;
}
