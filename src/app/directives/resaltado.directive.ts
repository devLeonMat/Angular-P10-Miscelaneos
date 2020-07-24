import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {
    console.log('directiva llamada');
    // el.nativeElement.style.backgroundColor = "yellow";
  }
@Input('appResaltado') nuevoColor: string;

  @HostListener('mouseenter') mouseEntro() {
    this.resltar(this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave') mouseSale() {
    this.resltar(null);
  }

  private resltar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
