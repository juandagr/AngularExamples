import { Component, OnInit } from '@angular/core';
import { ActorService } from '../services/actor.service';
import { DatabaseService } from '../services/database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-services',
  templateUrl: './test-services.component.html',
  styleUrls: ['./test-services.component.scss']
})
export class TestServicesComponent implements OnInit {

  public db:any[]
  actors:any[];

  actors$: Observable<any[]>;
  db$: Observable<any[]>;

  constructor(private actorService: ActorService, private databaseService: DatabaseService) { }

  //constructor

  ngOnInit() {
    this.db = this.databaseService.getItems();
    this.actors = this.actorService.getItems();

    this.actors$ = this.actorService.getItems$();

    this.actors$.subscribe(
      actors => this.actors = actors
    );

    this.db$= this.databaseService.getItems$();
    this.db$.subscribe(
      db => this.db = db
    );

  }

  add(){ 
    this.actorService.addItem("Another actor");
  }

  change(index){
    this.databaseService.changeRate(index);
  }
}
