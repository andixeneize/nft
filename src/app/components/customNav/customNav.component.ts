import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-nav',
  templateUrl: './customNav.component.html',
  styleUrls: ['./customNav.component.scss']
})
export class CustomNavComponent implements OnInit {

  constructor() { }

  public toggleNavbar = true;

  ngOnInit(): void {
  }

}
