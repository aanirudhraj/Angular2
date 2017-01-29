import { Injectable } from '@angular/core';  
import { Headers, Http } from '@angular/http';  
import { Movie } from './movie.model';


import 'rxjs/add/operator/toPromise';


@Injectable()
export class MovieService {  
  private moviesUrl : string = "http://www.omdbapi.com/?t="
  private moviesList : string = "http://www.omdbapi.com/?s="


  constructor(private http: Http) { }


  getMovie(search:any): Promise<Movie> {
    return this.http.get(this.moviesUrl + search + "&tomatoes=true&plot=full")
      .toPromise()
      .then(response =>
        response
          .json() as Movie)
          .catch(this.handleError);
  }

   getList(search:any): Promise<Movie> {
    return this.http.get(this.moviesList + search )
      .toPromise()
      .then(response =>
        response
          .json() as Movie)
          .catch(this.handleError); 
  }


  private handleError(error: any): Promise<any> {
    console.error('**ERROR**', error);
    return Promise.reject(error.message || error);
  }
}