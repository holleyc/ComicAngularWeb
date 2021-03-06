import { Component } from  '@angular/core'
//import { ISession } from '../events/shared/event.model'
import { EventService } from '../events/shared/event.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
        .nav.navbar-nav {font-size: 15px;}
        #searchForm {margin-right:100px;}
        @media (max-width: 1200px) {#searchForm {display:none}}
    `]
})
export class NavBarComponent {
    searchTerm: string = "";
    //foundSessions: ISession[];

    constructor(private eventService: EventService){

    }

    // searchSessions(searchTerm){
    //     //this.eventService.searchSessions(searchTerm).subscribe
    //     (sessions => {
    //         //this.foundSessions = sessions;
    //     })
    // }
}