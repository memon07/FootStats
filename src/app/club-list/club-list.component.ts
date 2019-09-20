import { Component, OnInit } from '@angular/core';
import { ClubListService } from './club-list.service';
import * as cloneDeep from 'lodash/cloneDeep';


@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.scss']
})
export class ClubListComponent implements OnInit {
  clubs:any = [];

  constructor(private clubservice : ClubListService) { 
    this.clubservice.getClubs().subscribe(result =>{
      this.clubs = cloneDeep(result)
      console.log(this.clubs)
    },
    error => {
      console.log(error)
    })
  }

  ngOnInit() {
  }

}
