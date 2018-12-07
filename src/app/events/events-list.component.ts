import { Component } from '@angular/core'
import { EventService } from './shared/event.service'

@Component({
    template: `
    <div>
        <h1>The Great Comic Collector</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-12">
                <event-thumbnail [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class EventsListComponent {
    events:any[]

    constructor(private eventService: EventService){

    }

    ngOnInit(){
        this.events = this.eventService.getEvents()
    }
}