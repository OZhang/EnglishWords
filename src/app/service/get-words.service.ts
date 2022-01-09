import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetWordsService {

  constructor(private http: HttpClient) { }

  public getJson(): Observable<any>{
    return this.http.get("../assets/json/8_2.json");
  }
}
