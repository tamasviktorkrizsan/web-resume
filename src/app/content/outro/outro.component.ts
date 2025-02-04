import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-outro',
  standalone: true,
  imports: [],
  templateUrl: './outro.component.html',
  styleUrl: './outro.component.scss'
})
export class OutroComponent {

  @Input() introPageRef!: ElementRef;

  scroll(el: HTMLElement) {

   el.scrollIntoView({ behavior: "smooth" });
    console.log("Scrolling to " + el.getAttribute("id"))

  }



}
