import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appPhoneNumber]'
})
export class PhoneNumberDirective {

  constructor(private ngControl: NgControl,public ref: ElementRef) { }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {

    const phoneNumber = value.replace(/\D/g, '');
    if (phoneNumber.length > 9) {
      this.ngControl.control?.setValue(phoneNumber.slice(0, 10)); 
    } else {
      this.ngControl.control?.setValue(phoneNumber);
    }
  }


}
