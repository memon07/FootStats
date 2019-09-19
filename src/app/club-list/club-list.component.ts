import { Component, OnInit } from '@angular/core';
import { ClubListService } from './club-list.service';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.scss']
})
export class ClubListComponent implements OnInit {
  clubs = [];

  constructor(private clubservice : ClubListService) { 
    this.clubservice.getClubs().subscribe(result =>{
      this.clubs.push(...result)
      console.log(this.clubs)
    },
    error => {
      console.log(error)
    })
  }

  ngOnInit() {
  }

}
