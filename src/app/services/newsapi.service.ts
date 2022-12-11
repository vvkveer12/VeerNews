import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http:HttpClient) { }

  getApiData():Observable<any>
  {
    var data  = "https://newsapi.org/v2/everything?q=Apple&from=2022-12-04&sortBy=popularity&apiKey=6dfc53ee17804dac8522ad02f6af3ab4";
    return this.http.get(data);
  }
}
