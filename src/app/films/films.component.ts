import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../service/films.service';
import { Films } from '../model/films';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: Films;
  comments: Comment

  constructor(
    public filmsService: FilmsService
  ) { }

  ngOnInit() {
    this.getListFilms()
  }

  getListFilms(){
    this.filmsService.getFilms().subscribe(this.onSuccessFilms.bind(this),this.onFailureList.bind(this))
  }

  getListComments(film){
    this.filmsService.getComments(film.id).subscribe(this.onSuccessComments.bind(this),this.onFailureList.bind(this))
  }

  private onSuccessFilms(res) {
    this.films = res
    console.log("Success")
  }

  private onSuccessComments(res) {
    this.comments = res
    console.log("Success")
  }

  private onFailureList(error) {
    console.log("Failure")
  }

}
