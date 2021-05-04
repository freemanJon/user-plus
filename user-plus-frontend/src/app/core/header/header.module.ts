import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialAngularModule } from "src/app/material-angular/material-angular.module";
import { HeaderComponent } from "./header.component";

@NgModule({
    declarations:[
        HeaderComponent
    ],
    imports:[
        MaterialAngularModule,
        RouterModule
    ],
    exports:[
        HeaderComponent
    ]
})
export class HeaderModule{}