import { Component  } from '@angular/core';
import { SidenavComponent} from '../../shared/side-nav/sidenav.component';
import { TopnavComponent } from '../../shared/top-nav/topnav.component';

@Component({
  selector:'Auth-Component',
  templateUrl: './withAuth.component.html',
  styleUrls: ['./withAuth.component.less']

})
export class WithAuthComponent{

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
}
