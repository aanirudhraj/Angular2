"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var movie_service_1 = require('./movie.service');
var AppComponent = (function () {
    function AppComponent(movieService) {
        this.movieService = movieService;
        this.movieList = [];
    }
    AppComponent.prototype.getNew = function (m) {
        this.search = m;
        this.getMovie();
    };
    AppComponent.prototype.getMovie = function () {
        var _this = this;
        this.movieService.getMovie(this.search)
            .then(function (movie) { return _this.movie = movie; });
        this.movieService.getList(this.search)
            .then(function (movieList) { return _this.movieList = movieList; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [movie_service_1.MovieService],
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css', 'app/animate.min.css']
        }), 
        __metadata('design:paramtypes', [movie_service_1.MovieService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map