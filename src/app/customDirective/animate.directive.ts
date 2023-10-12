import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAnimate]'
})
export class AnimateDirective {

  constructor(private e: ElementRef,private r :Renderer2) { }

  @HostListener('focus') inc(){
    this.r.setStyle(this.e.nativeElement,"width","200px")
    this.r.addClass(this.e.nativeElement,'lengthIncrease')
    this.r.removeClass(this.e.nativeElement,'lengthDecrease')
  
  }
  @HostListener('blur') dec(){
    this.r.removeClass(this.e.nativeElement,'lengthIncrease')
    this.r.setStyle(this.e.nativeElement,"width","150px")
    this.r.addClass(this.e.nativeElement,'lengthDecrease')
  
  }

}
