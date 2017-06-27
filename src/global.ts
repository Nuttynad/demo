import { Injectable } from '@angular/core';

@Injectable()
export class AppGlobals {
    public sessionId: string;
    public baseUrl = 'https://mimobotnode.au-syd.mybluemix.net/api/wit';
    // public baseUrl = 'http://127.1.0.0:8100/';

    // setSessionId() {
    //     var now = new Date();
    //     var enterDT = now.getFullYear() + now.getMonth() + now.getDate() + now.getTime()
    //     return enterDT;
    // }
}