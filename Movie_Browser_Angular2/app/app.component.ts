import { Component } from '@angular/core';  
import { MovieService } from './movie.service';  
import { Movie } from './movie.model';

@Component({
  selector: 'my-app',
  providers: [MovieService],
  templateUrl: 'app/app.component.html',
  styleUrls:['app/app.component.css','app/animate.min.css']
})


export class AppComponent {


  movie: Movie;
  movieList:any = [];
  search: string;
  


  constructor(private movieService: MovieService) {}

  getNew(m:any) {
    this.search = m;
    this.getMovie();
  }



  getMovie() {
    this.movieService.getMovie(this.search)
      .then(movie => this.movie = movie);

      this.movieService.getList(this.search)
      .then(movieList => this.movieList = movieList );
  }


}