import {Component, HostListener, OnInit} from '@angular/core';
import {MyServiceService} from "../my-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public myService: MyServiceService) { }

  selectFootballer(player: { name: string, club: string }): void {
    this.myService.selectedFootballer.set(player);
  }
}
