import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-about-section',
  styleUrl: './about-section.css',
  templateUrl: './about-section.html',
})
export class AboutSection {
  @Input() dark = true;
}
