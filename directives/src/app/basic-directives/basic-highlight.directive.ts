import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[app-basicHighlight]',
})
export class BasicHighLightDirective implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    console.log(this.element);
    this.element.nativeElement.style.backgroundColor = 'green';
  }
}
