import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'surName',
    'role',
    'email',
    'date',
  ];
  dataSource: any;
  constructor(private store: Store<AppState>) {
    this.dataSource = this.store.select('userStore');
  }

  ngOnInit() {}
}
