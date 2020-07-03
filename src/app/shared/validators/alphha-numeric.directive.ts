import { Directive, ElementRef, HostListener, Input, EventEmitter, Output } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[alphhaNumericOnly]'
})
export class AlphhaNumericDirective {
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();
  @Input() maxEntry: number;
  @Input() allowSpace: string;
  constructor(private _el: ElementRef) { }
  @HostListener('input', ['$event'])
  onInputChange(event) {
    const initalValue = this._el.nativeElement.value;
    let filterdVal;
    if (this.allowSpace === 'true') {
      filterdVal = initalValue.replace(/[^a-zA-Z0-9 ]/g, '');
    } else {
      filterdVal = initalValue.replace(/[^a-zA-Z0-9]/g, '');
    }

    if (this.maxEntry && filterdVal.length > this.maxEntry) {
      filterdVal = filterdVal.substr(0, this.maxEntry);
    }
    this._el.nativeElement.value = filterdVal;
    this.ngModelChange.emit(filterdVal);
    if (initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
