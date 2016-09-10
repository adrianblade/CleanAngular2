import {Directive} from 'angular2/core';
import {ElementRef} from "angular2/core";
import {Renderer} from "angular2/core";

@Directive ({
    selector: '[myHighlight]',
    inputs: ['highlightColor:myHighlight'],
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()',
    }
})


export class HighlightDirective {
    private _defaultColor = 'green';
    highlightColor: string;

    constructor(private _elRef: ElementRef, private _renderer: Renderer) {}

    onMouseEnter(){
        this.highlight(this.highlightColor || this._defaultColor);
    }

    onMouseLeave(){
        this._elRef.nativeElement.style.backgroundColor = null;
    }

    private highlight(color: string) {
        this._elRef.nativeElement.style.backgroundColor = color;
    }
}