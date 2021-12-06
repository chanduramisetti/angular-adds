import { Iadds1 } from './../iadds.sometype';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {DetailsService} from '../details.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public app:AppComponent,private _details:DetailsService) { }
  public c=1;
  public new_par="";
  public new_col="";
  public new_name="";
  public cre=true;
  public upd=false;
  public com=""
  public Name="";
  public new_cmnt=""
  public Pass="";
  public Email="";
  public f=false;
  public f1=true;
  public log=true;
  public reg=false;
  public par="";
  public col="";
  public map1 = new Map();
  public arr: Iadds1[]=[];
                        ngOnInit(){
                            this.map1=this.app.map;
                          this.arr= this.app.people;
                          console.log(this.arr +" hiiii");
                          
                        }

                        //submit start
                        submit(){
                          if(this.Email.length==0 || this.Pass.length==0 || this.Name.length==0&&this.reg)
                          alert("Enter valid details  s")
                          else{
                          console.log("Submiited");
                          console.log("login"+this.log);
                          console.log("register"+this.reg);
                          if(this.log)
                          {
                          for(let key of this.app.people){
                          if(key.Email==this.Email)
                          {
                            console.log(key.name +" "+key.add);
                            if(this.Pass==key.add)
                            {
                            this.f=true;
                            break;
                            }
                          }
                        }
                        }
                        if(this.reg){
                          this.f1=this.app.map1.has(this.Email);
                          if(this.f1)
                          alert("user already exists");
                        }
                        if(!this.f && this.log)
                        alert("Invalid Details");
                        if(!this.f1 && this.reg)
                          {

                            console.log("F1 called  "+ this.f1);
                            this.app.map1.set(this.Email,new Set());
                            this.app.map1.get(this.Email).add(this.Name);
                            this.newDetail();
                          }
                          }
                          

                        }
                        //submit ends
                        //login start
                        login(){
                            this.log=true;
                            this.reg=false;
                        }
                        //login end
                        //reg starts
                        register(){
                          this.log=false;
                            this.reg=true;
                        }
                        //reg ends
                        //post start
                        newDetail(){
                          const form={
                            name:this.Name,
                            add:this.Pass,
                            Email:this.Email
                          };
                          this._details.creatContact(form).subscribe(data=>{
                            console.log("created");
                          })
                        }
                        //post end
                        //update starts
                        update(){
                          console.log(this.Email+" "+this.Name);
                          if(!this.app.map1.has(this.Email)){
                          this.app.map1.set(this.Email,new Set());

                          }
                          if(!this.app.map1.get(this.Email).has(this.Name))
                          alert("add doesnt exists");
                          else{
                          const form={
                            name:this.Name,
                            add:this.Pass,
                            email:this.Email,
                            para:this.par,
                            color:this.col
                          };
                          this._details.updatePeople(form).subscribe(data =>{
                            console.log("updated");
                          })
                        }
                      }
                        //update end
                        //create click
                        create_click(){
                          this.cre=true;
                          this.upd=false;
                        }
                        update_click(){
                          this.cre=!true;
                          this.upd=!false;
                        }
                        //create 
                        create(){
                          console.log("create invoked " +this.new_par);
                          if(this.app.map1.get(this.Email).has(this.new_name))
                          alert("alredy There")
                          else{
                          const form={
                            name:this.new_name,
                            add:this.Pass,
                            Email:this.Email,
                            para:this.new_par,
                            color:this.new_col
                          };
                          this._details.createAdd(form).subscribe(data =>{
                            console.log("created add");
                          })
                        }
                        }
                        //create end
                        postComments(a:string,c:string,b:string){
                          console.log("name: "+a+" comment: "+(b)+" "+this.com);
                          var p="";
                          var col="";
                          for(let d of this.app.people)
                          {
                            if(d.name==a)
                            {
                              p=d.para;
                              col=d.color;
                              break;
                            }
                          }
                          const form={
                            email:a,
                            name:c,
                            comment:"(User:"+this.Email+" Comment: "+this.com+") "+b+"  "
                          };
                          this._details.updateComment(form).subscribe(data =>{
                            console.log("updated comment");
                          })
                        }
  
}
