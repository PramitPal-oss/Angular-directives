import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'directives';
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];

  onOdd() {
    if (this.onlyOdd) {
      this.numbers = this.numbers.filter((el) => el % 2 !== 0);
    } else {
      this.numbers = this.numbers.filter((el) => el % 2 === 0);
    }
  }
}
