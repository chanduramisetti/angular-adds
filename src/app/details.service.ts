import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iadds ,Iadds1} from './iadds.sometype';
import {catchError,tap,map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DetailsService {

  public arr: any;
  d: string="";
  constructor(private http: HttpClient) { 
    
  }
  getDetails(){
    return this.arr= this.http.get("http://localhost:5500/users");
  }
  getPeople(){
    return this.http.get<Iadds1[]>("http://localhost:5500/users");
  }
  creatContact(p: {}){
    return this.http.post("http://localhost:5500/users",p);
  }
  updatePeople(p :{}){
    return this.http.put("http://localhost:5500/users",p);
  }
  updateComment(p :{})
    {
      return this.http.put("http://localhost:5500/comment",p);
    }
    createAdd(p :{}){
      return this.http.post("http://localhost:5500/add",p);
    }
}
