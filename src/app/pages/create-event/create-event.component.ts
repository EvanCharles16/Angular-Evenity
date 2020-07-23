import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {
  private baseUrl = 'https://api.indrakawasan.com';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onCreatePost() {}

  // onCreatePost(postData: {
  //   title: string;
  //   time: number;
  //   date: number;
  //   price: number;
  //   location: string;
  //   imageEvent: string;
  // }) {
  //   this.http
  //     .post(`${this.baseUrl}/event/create`, postData)
  //     .subscribe((responseData) => {
  //       console.log(responseData);
  //     });
  // }
}
