
import {Injectable} from '@angular/core';

@Injectable()
export class MapService {
    keys:Array<any> = [];
    data:Object = {};
    constructor(){}

    put(key, value) {
        if (this.data[key] == null) {
            this.keys.push(key);
        }
        this.data[key] = value;
    }

    get(key) {
        //console.log("key:"+key+", "+this.data[key])
        return this.data[key];
    }

    remove(key) {
        for (var i = 0; i < this.keys.length; i++) {
            if (this.keys[i] == key) {
                this.keys.splice(i, 1);
                break;
            }
        }
        delete this.data[key]
    }

    each(fn) {
        if (typeof fn != 'function') {
            return;
        }
        var len = this.keys.length;
        for (var i = 0; i < len; i++) {
            var k = this.keys[i];
            fn(k, this.data[k], i);
        }
    }

    entrys() {
        var len = this.keys.length;
        var entrys = new Array(len);
        for (var i = 0; i < len; i++) {
            entrys[i] = {
                key: this.keys[i],
                value: this.data[i]
            };
        }
        return entrys;
    }

    isEmpty() {
        return this.keys.length == 0;
    }

    size() {
        return this.keys.length;
    }
    allKeys() {
        return this.keys;
    }
}