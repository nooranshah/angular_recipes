import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  notificationCount = 10;

  updateNotificationsChanged(count:number){
    this.notificationCount =count;
  }
}
