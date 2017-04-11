// Angular imports
import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";

// Custom imports
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

@Injectable()
export class BackendService {
    backendUrl: string = "";

    constructor(
        private http: Http
    ) { }

    backendCall(email: string, key: string): Observable<any> {
        return this.http.get(`${this.backendUrl}/`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    handleError(error: any): any {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : "Server error";
        // Return the error
        return Observable.throw(errMsg);
    }
}
