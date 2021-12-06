import { Component, OnInit } from '@angular/core';
import {DetailsService} from './details.service';
import { Iadds,Iadds1 } from './iadds.sometype';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   public detail : any;
   public email="";
   public para:string[]=[];
   public color:string[]=[];
   public people : Iadds1[]=[];
   public map=new Map();
   public map1=new Map();
   public comment:string[] =[];
  constructor(private _details:DetailsService){}
  
  
  ngOnInit(){
   this._details.getDetails().subscribe(
     data=> {
       this.detail=data;
      // this.people=data;
       console.log(data);
     }
    );

    this._details.getPeople().subscribe(
      data => {
        this.people=data;
        //this.color=data;
        for(var d of this.people){
          this.map.set(d.Email,d);
          if(!this.map1.has(d.Email))
          {
            this.map1.set(d.Email,new Set());
          }
          this.map1.get(d.Email).add(d.name);
        this.comment.push(d.comment);
        this.color.push(d.color);
        this.para.push(d.para);
        }
        console.log(this.map1);
    }
    );
    console.log(this.people);
  }
  
}
