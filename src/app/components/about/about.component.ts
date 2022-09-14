import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  defaultText = 'Hover to see how to use directive!';

  content = 'Set the element innerHtml to a certain text on mouse enter and set back to default text on mouse leave';

  constructor() {}
}
