import { Component } from '@angular/core';


@Component({
    selector : 'app-person',
    templateUrl : 'person.component.html'
})

export class PersonComponent {

    identification  :string = '9999999999999';
    name            :string = 'CONSUMIDOR FINAL';
    surname         :string = '';
    gender          :string = '';
    type            :string = 'CEDULA';
    dateOfBirth      :Date = new Date();

    get nameCapitalize():string {
        return this.name.toUpperCase();
    }

    getFullName():string {
        return `${ this.name }  ${ this.surname }`;
    }

    setDateOfBird ( birthdate: Date ): void {
        


    }

    getAge() : number {
        const age = 0;
        return age;
    }
    
}