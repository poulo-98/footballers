import {Component} from '@angular/core';
import {MyServiceService} from "../my-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  footballers: any;
  constructor(public myService: MyServiceService) {
    this.footballers=myService.footballers.apply((val: any)=>{return val})
    console.log(this.footballers)
  }

  selectPlayer(player: { name: string, club: string }) {
    this.myService.selectedFootballer.set(player);
  }
}
