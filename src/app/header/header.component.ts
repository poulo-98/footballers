import {Component} from '@angular/core';
import {MyServiceService} from "../my-service.service";
import {of} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  footballers: { name: string, club: string }[];
  constructor(public myService: MyServiceService) {
    this.footballers=myService.footballers()
  }

  selectPlayer(player: { name: string, club: string }) {
    this.myService.selectedFootballer.set(player);
  }
}
