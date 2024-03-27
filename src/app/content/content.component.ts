import { Component, OnInit } from '@angular/core';
import {MyServiceService} from "../my-service.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  selectedFootballer: { name: string, club: string } | null = null;

  constructor(private myService: MyServiceService) { }

  ngOnInit(): void {
    this.myService.selectedFootballer.subscribe((value: { name: string; club: string; } | null) => {
      this.selectedFootballer = value;
    });
  }
}
