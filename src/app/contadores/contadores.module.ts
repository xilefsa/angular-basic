import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContadorComponente } from "./contador/contador.component";



@NgModule({
    declarations: [
        ContadorComponente
    ],
    exports :[
        ContadorComponente
    ],
    imports : [
        CommonModule
    ]
})

export class ContadoresModule {

}