import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginRoutes } from './login.routing';
import { LoginComponent } from './login.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {MatInputModule,MatCardModule, MatButtonModule , MatSidenavModule} from '@angular/material';
import { HttpModule } from '@angular/http';
import { CommonModule } from "@angular/common";


@NgModule({
    imports : [
        RouterModule.forChild(LoginRoutes),
        FormsModule,
        MatButtonModule,
        MatSidenavModule,
        MatCardModule,
        MatInputModule,
        HttpModule,
        CommonModule
          ],
    declarations: [ LoginComponent ]
})

export class LogindModule {}
