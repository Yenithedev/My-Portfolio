import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero-section',
  styleUrl: './hero-section.css',
  templateUrl: './hero-section.html',
})
export class HeroSection {
  @Input() dark = true;
}
