import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onCreatePost(postData: {
    title: string;
    category: string;
    maxPeople: number;
    organizerName: string;
    responsibleName: string;
    description: string;
    location: string;
    time: number;
    date: number;
    price: number;
    imageEvent: string;
    detail: string;
  }) {
    this.http
      .post('https://api.indrakawasan.com/event/create', postData)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }
}
