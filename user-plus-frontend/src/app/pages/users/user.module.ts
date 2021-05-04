import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxMaskModule } from "ngx-mask";
import { ToastrModule } from "ngx-toastr";
import { MaterialAngularModule } from "src/app/material-angular/material-angular.module";
import { UserFilterPipe } from "./shared/user-filter.pipe";
import { UserFormComponent } from "./user-form/user-form.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserComponent } from "./user/user.component";

@NgModule({
    declarations:[
        UserComponent, 
        UserFormComponent, 
        UserListComponent,
        UserFilterPipe
    ],
    imports:[
        HttpClientModule,
        MaterialAngularModule,
        CommonModule,
        FormsModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        NgxMaskModule.forRoot()
    ],
    exports:[
        UserListComponent
    ]
})
export class UserModule{}