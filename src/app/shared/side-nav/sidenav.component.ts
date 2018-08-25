import { Component,Input,Output,EventEmitter } from '@angular/core';

declare var $:any;

@Component({
    selector: '[sidenav-root]',
    templateUrl: 'sidenav.component.html'

})
export class SidenavComponent {
    @Output() menuChangeEvent = new EventEmitter();
    sideMenu = [{
      "label":"Home",
      "value":"home"
    },{
      "label":"table list",
      "value":"tabllist"
    },{
      "label":"user list",
      "value":"userlist"
    },{
      "label":"check list",
      "value":"checklist"
    }];
    constructor(){
    }
}
