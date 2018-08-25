import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';

import { HttpModule } from '@angular/http';
import {ToastrModule} from 'ngx-toastr';
/**
 * custom component import
 */
import { AuthLayoutComponent } from './layouts/auth/auth.component';
import { WithAuthComponent } from './layouts/withAuth/withAuth.component';
import { SidenavComponent } from './shared/side-nav/sidenav.component';
import { TopnavComponent } from './shared/top-nav/topnav.component';

/**
 * services called
 */
import {UserService} from './services/user.Service';
import{ErrorshowService} from './services/error_show.Service';


@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    WithAuthComponent,
    SidenavComponent,
    TopnavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    HttpModule,
    MatSidenavModule,
    CommonModule,
    ToastrModule.forRoot({
      tapToDismiss : true,
      closeButton : true,
      positionClass	: 'toast-bottom-right',
      timeOut: 3000,
      preventDuplicates: true,
      maxOpened:1
    }),
  ],
  exports : [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [UserService,ErrorshowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
