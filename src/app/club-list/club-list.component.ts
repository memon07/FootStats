import { Component, OnInit } from '@angular/core';
import { ClubListService } from './club-list.service';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.sass']
})
export class ClubListComponent implements OnInit {
  clubs :'';

  constructor(private clubservice : ClubListService) { 
    this.clubservice.getClubs().subscribe(result =>{
      console.log(result)
    },
    error => {
      console.log(error)
    })
  }

  ngOnInit() {
  }

}
