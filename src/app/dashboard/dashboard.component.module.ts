import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardRoutes } from './dashboard.coponent.routing';
import { DashboardComponent } from './dashboard.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {MatInputModule,MatCardModule, MatButtonModule , MatSidenavModule} from '@angular/material';
import { HttpModule } from '@angular/http';
import { CommonModule } from "@angular/common";


@NgModule({
    imports : [
        RouterModule.forChild(DashboardRoutes),
        FormsModule,
        MatButtonModule,
        MatSidenavModule,
        MatCardModule,
        MatInputModule,
        HttpModule,
        CommonModule
          ],
    declarations: [ DashboardComponent ]
})

export class DashboardModule {}
