import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import _72external from "../../assets/json/72external.json";

@Injectable({
  providedIn: 'root'
})
export class GetWordsService {

  constructor(private http: HttpClient) { }

  public getJson(): Observable<any>{
    return this.http.get("../assets/json/72external.json");
  }
}
