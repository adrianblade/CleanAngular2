import {Component, EventEmitter} from 'angular2/core';

@Component({
    selector: 'my-confirm',
    template: `
        <h1>You submitted the following details. Is this correct?</h1>
        <p>Your name is 
            <span class="highlight">
                {{myself.name}}
            </span>
        and you are 
            <span class="highlight">
                {{myself.old}}
            </span> years old. 
        Please click on confirm if yoy hace made any changes to this information.
        </p>
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
        <button [disabled]="isValid" (click)="onConfirm()">Submit</button>
        
    `,
    inputs: ['myself'],
    outputs: ['confirmed']
})
export class ConfirmComponent {
    myself= {name: '', age: ''};
    isFiller = false;
    isValid = false;
    confirmed = new EventEmitter<{name: string, age: string}>()

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

    onConfirm() {
        this.confirmed.emit(this.myself)
    }

}