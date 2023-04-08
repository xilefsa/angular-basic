import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PersonComponent } from "./person/person.component";
import { ListComponent } from "./list/list.component";



@NgModule({
    declarations:[
        PersonComponent,
        ListComponent
    ],
    exports:[
        ListComponent
    ],
    imports:[
        CommonModule
    ]
})

export class PeopleModule {

}