import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-routing',
  templateUrl: './test-routing.component.html',
  styleUrls: ['./test-routing.component.scss']
})
export class TestRoutingComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
