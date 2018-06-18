import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../user/user.service';

@Injectable()
export class CanchaService {
  public url:string;

  constructor(public http: HttpClient, public _userService: UserService) {
    this.url = GLOBAL.url;
  }

  getCancha(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json').set('Authorization',this._userService.getToken());
    return this.http.get(this.url+'getcanchas',{headers: headers});
  }

  getCanchas(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json').set('Authorization',this._userService.getToken());
    return this.http.get(this.url+'getcancha'+id,{headers: headers});
  }
}

