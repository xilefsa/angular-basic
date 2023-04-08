import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  people:string[] = ['fELISX SAGUA', 'NAYELI SAAGUY', 'ZOE paulte'];

  deletePersona:string = '';
  
  
  deletePerson ():void {
    this.deletePersona = this.people.shift() || "" ;
  }
}
