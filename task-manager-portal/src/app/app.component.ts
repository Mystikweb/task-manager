import { Component, OnInit } from '@angular/core';

import { HelloClientService } from './helloclient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'task-manager-portal';
  serviceResult = '';

  constructor (private readonly helloClient: HelloClientService) { }

  ngOnInit(): void {
    this.helloClient.getHello().subscribe((value) => {
      console.log(value);
      this.serviceResult = value;
    });
  }
}
