import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirectiveDirective{
  @HostBinding('class.open') toggle = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.toggle = this.elRef.nativeElement.contains(event.target) ? !this.toggle : false;
  }

  constructor(private elRef: ElementRef) { }
}
