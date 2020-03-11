import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'onlinestore';

  constructor(private db:AngularFireDatabase)
  {

  }
  ngOnInit() {
    this.db.list('/courses').valueChanges()
                            .subscribe(courses=>console.log(courses));
  }
}
