import { Directive, ElementRef, Renderer2 } from '@angular/core';
import * as Prism from 'prismjs';

@Directive({
    selector: 'textarea[ion-prism]',
})
export class IonPrismDirective {

    el: any;
    content: string;
    language: string;

    constructor(public elementRef: ElementRef, public renderer: Renderer2) {}

    ngOnInit() {
        this.content = this.elementRef.nativeElement.value;
        this.language = this.elementRef.nativeElement.getAttribute('ion-prism');

        this.el = this.renderer.createElement('pre');
        this.renderer.appendChild(this.el, this.renderer.createText(this.content));
        this.renderer.addClass(this.el, 'prism');
        this.renderer.addClass(this.el, 'language-' + this.language);
        this.renderer.setAttribute(this.el, 'data-prism-language', this.language);

        this.renderer.insertBefore(this.elementRef.nativeElement.parentElement, this.el, this.elementRef.nativeElement);

        this.elementRef.nativeElement.remove();

        this.highlightCode();
    }

    highlightCode(): void {
        let newContent = '';
        const highlightedHTML = Prism.highlight(this.content, Prism.languages[this.language])
        // .replace(/^\s\s*/, '') // delete spaces at the start of the block
            .replace(/\s\s*$/, ''); // delete spaces at the end of the block

        const spacesToCancel = highlightedHTML.search(/\S|$/);

        const lines = highlightedHTML.split('\n');

        lines.forEach((line, index) => {
            const spacesAtStart = line.search(/\S|$/);
            line = line.slice(spacesAtStart >= spacesToCancel ? spacesToCancel : spacesAtStart);
            newContent += line + '\n';
        });

        this.el.innerHTML = newContent;
    }
}
