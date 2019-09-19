import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubListService } from '../club-list/club-list.service';


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
        let tempArray = [...result]
        this.club = tempArray.filter(e =>{
          return e.team_key === this.route.snapshot.params.team_key
        })
        console.log(this.route.snapshot.params.team_key)
        console.log(this.club)
      },
      error => {
        console.log(error)
      })
  }

}
