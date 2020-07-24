import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../../event';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  @Input() eventModel: Event;
  @Input() event;
  form;
  @Input() appearEvent;

  constructor() {}

  ngOnInit(): void {
    this.form = this.event;
  }

  onEditEvent() {
    const index = this.appearEvent.findIndex(
      (data) => data.id === this.event.id
    );
    if (this.form.title) {
      this.appearEvent[index] = this.form;
    }
  }

  onChange(event, field) {
    this.form[field] = event;
    console.log(event);
  }
}
