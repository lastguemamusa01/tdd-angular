import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.less']
})
export class HomesComponent implements OnInit {

  // observables
  homes$;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {

    this.homes$ = this.dataService.getHomes$();
    /*
    this.homes$ = of([
      {
        title: 'Home 1',
        image: 'assets/listing.jpg',
        location: 'new york'
      },
      {
        title: 'Home 2',
        image: 'assets/listing.jpg',
        location: 'boston'
      },
      {
        title: 'Home 3',
        image: 'assets/listing.jpg',
        location: 'chicago'
      }
    ]);
    */

  }

}
