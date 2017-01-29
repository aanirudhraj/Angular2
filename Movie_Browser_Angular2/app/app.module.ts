import { NgModule } from '@angular/core';  
import { BrowserModule } from '@angular/platform-browser';  
import { FormsModule } from '@angular/forms';  
import { HttpModule } from '@angular/http';  
import { AppComponent } from './app.component';  
import { MovieService } from './movie.service';


@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule],
  providers: [MovieService],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { } 