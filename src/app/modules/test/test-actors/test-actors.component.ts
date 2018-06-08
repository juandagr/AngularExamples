import { Component, OnInit } from '@angular/core';
import { ActorService } from '../services/actor.service';

@Component({
  selector: 'app-test-actors',
  templateUrl: './test-actors.component.html',
  styleUrls: ['./test-actors.component.scss']
})
export class TestActorsComponent implements OnInit {

  actors:any[];
  constructor(private actorService:ActorService) { }

  ngOnInit() {
    this.actors = this.actorService.getItems();
  }

}
