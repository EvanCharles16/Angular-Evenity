import { Component, OnInit } from '@angular/core';
import { DataEvent } from '../../mock-event';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  appearEvent = DataEvent;

  constructor() {}

  ngOnInit(): void {}
}
