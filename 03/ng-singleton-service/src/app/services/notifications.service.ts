import { Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class NotificationsService {
  private count: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  count$: Observable<number> = this.count.asObservable();
  constructor(@Optional() @SkipSelf() existingServices:NotificationsService) {
    if(existingServices){
      throw Error("The service has already been provided in the App,Avoid providing it again in child modules")
    }
  }

  setCount(countVal) {
    this.count.next(countVal);
  }
}
