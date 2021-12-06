import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DetailsService} from'./details.service';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
