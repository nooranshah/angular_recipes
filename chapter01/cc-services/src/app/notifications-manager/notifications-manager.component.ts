import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationsService } from '../services/notifications.service';
import { first } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss']
})
export class NotificationsManagerComponent implements OnInit {
  notificationsCount$: Observable<number>; 
  constructor(private notificationService:NotificationsService) { }

  ngOnInit(): void {

    this.notificationsCount$ = this.notificationService.count$;
  }

  getCountVal(callBack){
    this.notificationsCount$.pipe(
      first()
    ).subscribe(callBack);

  }

  addNotification() {
    //this.notificationsCount++;

    this.getCountVal(countVal=>{
      debugger;
      this.notificationService.setCount(++countVal);
    })
  }

  removeNotification() {
    // if (this.notificationsCount == 0) {
    //   return;
    // }
    // this.notificationsCount--;

    this.getCountVal(countVal=>{
     if(countVal==0)
     return
     else
     this.notificationService.setCount(--countVal);
    })
  }

  resetCount() {
    this.notificationService.setCount(0)
  }

}
