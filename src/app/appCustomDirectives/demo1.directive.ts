import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDemo1]'
})
export class Demo1Directive implements OnInit {
  constructor(private tagRef:ElementRef) {
        
  }
  ngOnInit(): void {
    this.tagRef.nativeElement.style.backgroundColor = 'lightyellow';
      // this.tagRef.nativeElement.style.backgroundColor="rgb(237, 238, 170)"
  }

}
