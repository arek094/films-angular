import { Component, OnInit } from '@angular/core';
import { FilmsService } from './service/films.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'films-angular';

  constructor(
    public filmsService: FilmsService
  ) { }

    ngOnInit() {
    //console.log(this.filmsService.getFilms())
   }

}


