import { Component } from '@angular/core';
import {ArrowComponent} from "../../component/arrow/arrow.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [
    ArrowComponent,
    NgOptimizedImage
  ],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {

}
