import { Component, OnInit, Input } from '@angular/core';
import { DataEvent } from '../../mock-event';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  @Input() appearEvent = DataEvent;
  onDisplayModal = false;
  selectedEvent;
  constructor() {}

  ngOnInit(): void {}

  onDisplay(event) {
    this.onDisplayModal = !this.onDisplayModal;
    this.selectedEvent = event;
  }
}
