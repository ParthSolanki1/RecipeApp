import { Directive, HostListener, HostBinding } from '@angular/core';


@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {

    @HostBinding('class.open') changeClass = false;

    @HostListener('click') showDropdown() {
        this.changeClass = !this.changeClass;
    }
}