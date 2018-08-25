import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr'
import {Http} from '@angular/http';

@Injectable()
export class ErrorshowService {
    state: any;
    showerror:any;
    constructor(public http: Http, public toastr: ToastrService, public router: Router) {
    }

    Showerror(errorObj) {
        if (errorObj.statusCode == '400') {
            this.toastr.error(errorObj.message, '');
        } else if (errorObj.statusCode == '401') {
            this.toastr.error(errorObj.message, '');
            localStorage.clear();
            setTimeout(()=>{
              this.router.navigate['/login'];
            },500);
            // this.accountService.logoutService().subscribe(
            //         data => { localStorage.clear(); setTimeout(()=>{this.state.go('appHome.home');},500);},
            //         err => {
            //             localStorage.clear();
            //             setTimeout(()=>{
            //                 this.state.go('appHome.home');
            //             },500);

            //             //this.showerror=JSON.parse(err._body);
            //             //this.Showerror(this.showerror.statusCode);
            //     }
            // );

        } else if (errorObj.statusCode == '421') {
            this.toastr.error(errorObj.message, '');
            this.toastr.error(errorObj.message, '');
            localStorage.clear();
            setTimeout(()=>{
              this.router.navigate['/login'];
            },500);
            // this.accountService.logoutService().subscribe(
            //         data => { localStorage.clear(); setTimeout(()=>{ this.state.go('appHome.home');},500);},
            //         err => {
            //             localStorage.clear();
            //         //this.showerror=JSON.parse(err._body);
            //             setTimeout(()=>{
            //                 this.state.go('appHome.home');
            //             },500);
            //         //this.Showerror(this.showerror.statusCode);
            //     }
            // );
        } else {
            // localStorage.clear();
            this.toastr.error(errorObj.message, '');
        }


    }

}
