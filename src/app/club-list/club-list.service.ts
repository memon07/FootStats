import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';



@Injectable()
export class ClubListService {

    constructor(private http: HttpClient) {}
    
    getClubs() {
        return this.http.get('https://apiv2.apifootball.com/?action=get_teams&league_id=148&APIkey=476fd1a642a50e68a91876c5a1ee5ccf1d16e7ffce7ab7af02675aed7535fdf4');
    }

}

