import {Component} from 'angular2/core';
import {AttributeDirectives} from "./attribute-directives.component";
import {StructuralDirective} from "./structural-directives.component";

@Component({
    selector: 'app',
    template: `
        <my-attribute-directives></my-attribute-directives>
        <br>#
        <h1>Structural Directives</h1>
        <my-structural-directives></my-structural-directives>
    `,
    directives: [AttributeDirectives, StructuralDirective],
})
export class AppComponent {

}