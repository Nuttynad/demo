import { Injectable } from '@angular/core';
import { Http, Request, RequestOptions, Headers} from '@angular/http';
import 'rxjs';
import { AppGlobals } from '../global';

@Injectable()
export class ChatBotService {

  constructor(public http: Http, public _appGlobals: AppGlobals) {
    console.log('Hello ChatBotService Provider');
  }

  sendRequest(request) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    //console.log(request);
    return this.http.post(this._appGlobals.baseUrl, request, options).toPromise();
  }
}
