import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {IntroComponent} from "./content/intro/intro.component";
import {CvComponent} from "./content/cv/cv.component";
import {GalleryComponent} from "./content/gallery/gallery.component";
import {OutroComponent} from "./content/outro/outro.component";
import {SkillsComponent} from "./content/skills/skills.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, IntroComponent, CvComponent, GalleryComponent, OutroComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'a-portfolio';

  @ViewChild('introPage', { read: ElementRef }) introPageElement!: ElementRef;


 /* scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth" });
    console.log("Scrolling to " + el.getAttribute("id"))
  }*/


}
