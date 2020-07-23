import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../../event';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  @Input() eventModel: Event;

  constructor() {}

  ngOnInit(): void {}
}
