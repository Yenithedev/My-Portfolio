import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { AboutSection } from './components/about-section/about-section';
import { ContactSection } from './components/contact-section/contact-section';
import { Footer } from './components/footer/footer';
import { HeroSection } from './components/hero-section/hero-section';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';

@Component({
  imports: [Navbar, AboutSection, ContactSection, Footer, HeroSection, Projects, Skills],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  dark = false;

  onToggleTheme() {
    this.dark = !this.dark;
    this.applyTheme();
  }

  private applyTheme() {
    document.documentElement.classList.toggle('dark', this.dark);
  }
}
