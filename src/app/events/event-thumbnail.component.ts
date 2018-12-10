import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template:`
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <img data-image-link="" class="event-image col-md-2" src="{{event.imageUrl}}" alt="GI Joe">
        <h2>{{event?.name}}</h2>
        <div>Publisher: </div>
        <div>Issue: </div>
        <div *ngIf="event?.onlineUrl">
            Online URL: {{event?.onlineUrl}}
        </div>
    </div>
    `,
    styles: [`
        .green { color: #003300 !important;}
        .bold { font-weight: bold; }
        .thumbnail { min-height: 275px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent{
   @Input() event:any

}