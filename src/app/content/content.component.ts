import { Component, OnInit } from '@angular/core';
import {MyServiceService} from "../my-service.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  constructor(protected myService: MyServiceService) { }

}
