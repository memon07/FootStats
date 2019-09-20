import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubListService } from '../club-list/club-list.service';
import * as cloneDeep from 'lodash/cloneDeep';


@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {
  club = [];
  constructor(private route: ActivatedRoute,private clubservice : ClubListService) { }

  ngOnInit() {
      this.clubservice.getClubs().subscribe(result =>{
        // let tempArray = [...result]
        let tempArray = cloneDeep(result)
        this.club = tempArray.filter(e =>{
          return e.team_key === this.route.snapshot.params.team_key
        })
      },
      error => {
        console.log(error)
      })
  }

}
