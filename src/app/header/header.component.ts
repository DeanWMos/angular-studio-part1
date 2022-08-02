import { Component, OnInit } from '@angular/core';

// export class HeaderComponent implements OnInit {

//   missionName: string = "Mars 2030";
//   rocketName: string = "Plasma Max";
// }

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  missionName: string = "Mars 2030";
  rocketName: string = "Plasma Max";

  constructor() { }

  ngOnInit(): void {
  }

}
