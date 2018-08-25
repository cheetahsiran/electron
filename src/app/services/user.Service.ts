import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { CommonService } from './common.Service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
  
export class UserService {
  constructor(private http: Http) { }
  loginService(data) {
    console.log('user data info', data);
    var respData = CommonService.noAuthReq('api/login');
    return this.http.post(respData.url, data, { headers: respData.headers }).map(res => res.json())
  }
}
