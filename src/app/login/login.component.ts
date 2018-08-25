import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.Service';
import { MapService } from '../services/errMapServices/errMapService';
import { ErrorshowService } from '../services/error_show.Service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  showLogin = true;
  showForget = false;
  uName = '';
  pWord = '';
  fEmail = '';
  unameError = '';
  funameError = '';
  pwordError = '';
  emailError = '';
  femailError = '';
  errArr = [];
  errorMap: any;
  showerror: any;
  constructor(private router: Router, public UserService: UserService, public ErrorshowService: ErrorshowService, public toastr: ToastrService) {
    this.errorMap = new MapService();
  }

  ngOnInit() {
  }
  checkLogin(dataObj) {
    if (this.loginValidate(0)) {
      let dataObj = {
        "uName": this.uName,
        "pWord": this.pWord
      }
      this.toastr.success('Login Successfully', '', { timeOut: 3000 });
      this.router.navigate(['/dashboard']);
      // this.UserService.loginService(dataObj).subscribe(
      //   data => {
      //     localStorage.setItem('authorization', 'asfasfasfdf');
      //     this.router.navigate(['/dashboard']);
      //     this.toastr.success(data.message, '', { timeOut: 3000 });
      //   },
      //   err => {
      //     this.showerror = JSON.parse(err._body);
      //     this.ErrorshowService.Showerror(this.showerror);
      //   }
      // );
    }

  }
  loginValidate(validateCode: number) {
    if (validateCode == 0) {
      this.errorMap = new MapService();
    }
    if (validateCode == 0 || validateCode == 1) {
      if (this.pWord == undefined || this.pWord == '' || this.pWord == null) {
        this.errorMap.put('pWord', "Useraname is mandatory");
      } else {
        this.errorMap.remove('pWord');
      }
    }
    if (validateCode == 0 || validateCode == 2) {
      if (this.pWord == undefined || this.pWord == '' || this.pWord == null) {
        this.errorMap.put('pWord', "Password is mandatory");
      } else {
        this.errorMap.remove('pWord');
      }
      if (this.errorMap.isEmpty()) {
        return true;
      } else {
        return false;
      }
    }

  }
  forgetPassword() {
    this.showLogin = false;
    this.showForget = true;
  }
  gotoLogin() {
    this.showLogin = true;
    this.showForget = false;
  }
}
