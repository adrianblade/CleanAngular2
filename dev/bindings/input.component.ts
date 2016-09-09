import {Component, EventEmitter} from 'angular2/core';

@Component({
    selector: 'my-input',
    template: `
        <h1>Your details, please:</h1>
        <div>
            <label for="name">Your Name</label>
            <input type="text" id="name" [(ngModel)]="myself.name" (keyup)="onKeyUp()">
        </div>
        <div>
            <label for="age">Your Age</label>
            <input type="text" id="age" [(ngModel)]="myself.age" (keyup)="onKeyUp()">
        </div>
        <br>
        <div>Filled out: {{isFiller ? 'YES' : 'NO'}}</div>
        <div>Valid: {{isFiller ? 'YES' : 'NO'}}</div>
        <br>
        <button [disabled]="isValid" (click)="onSubmit()">Submit</button>
        
    `,
    inputs: ['myself'],
    outputs: ['submitted']
})
export class InputComponent {
    myself= {name: '', age: ''};
    isFiller = false;
    isValid = false;
    submitted = new EventEmitter<{name: string, age: string}>()

    onKeyUp() {
        if (this.myself.name != '' && this.myself.age != '') {
            this.isFiller = true;
        } else {
            this.isFiller = false;
        }
        if (this.myself.name != '' && /^\d+$/.test(this.myself.age)) {
            this.isFiller = true;
        } else {
            this.isFiller = false;
        }
    }
    onSubmit() {
        this.submitted.emit(this.myself)
    }
}