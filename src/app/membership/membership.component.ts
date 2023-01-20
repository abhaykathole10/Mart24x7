import { Component, OnInit } from '@angular/core';

import { MadridService } from '../madrid.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  constructor(
    private realMadrid: MadridService 
  ) { }

  ngOnInit(): void {
  }

}
