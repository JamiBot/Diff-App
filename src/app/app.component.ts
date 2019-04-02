import {Component} from '@angular/core';
import * as Diff from 'text-diff';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  leftText = "";
  rightText = "";
  diffHtml = "";

  constructor() {
  }

  textChanged() {
    console.log("text changed");

    var diff = new Diff(); // options may be passed to constructor; see below
    var textDiff = diff.main(this.leftText, this.rightText); // produces diff array
    this.diffHtml = diff.prettyHtml(textDiff); // produces a formatted HTML string
  }
}
