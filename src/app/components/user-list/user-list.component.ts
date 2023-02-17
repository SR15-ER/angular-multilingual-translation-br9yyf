import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'surName','role','email','date'];
  dataSource :any
  constructor(private store: Store<AppState>) { 
    this.dataSource  = this.store.select('userStore');
  }

  ngOnInit() {}

}