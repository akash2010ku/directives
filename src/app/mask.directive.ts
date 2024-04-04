import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
@Directive({
  selector: '[appMask]'
})
export class MaskDirective {
  constructor(public ref: ElementRef,private ngControl: NgControl) {}

  @HostListener('input')
  masking() {
    
    let str = this.ref.nativeElement.value;
    
    if (str.length === 1) {
      this.ref.nativeElement.value = '*';
    } else if (str.length > 1 && str.length <= 8) {
      this.ref.nativeElement.value = str.charAt(0) + '*'.repeat(str.length - 1);
    } else if (str.length > 8) {
      this.ref.nativeElement.value = str.slice(0, 12);
    }
  }




}
