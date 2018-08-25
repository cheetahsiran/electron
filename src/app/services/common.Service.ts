import { Headers } from '@angular/http';

export  class CommonService {
    static rootUrl:string = "http://localhost:4000/";
    static cdnUrl:string = "";


    static noAuthReq(url:string) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return {
            url: this.rootUrl + url,
            headers: headers,
        }
    }

    static queryAuthReq(url:string) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return {
            url: this.rootUrl + url +"?authorization="+localStorage.getItem('authorization'),
            headers: headers
        }
    }

    static authReq(url:string) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('authorization', localStorage.getItem('authorization'));
        return {
            url: this.rootUrl + url,
            headers: headers
        }
    }

}
