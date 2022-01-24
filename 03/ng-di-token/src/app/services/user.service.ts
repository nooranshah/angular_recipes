import { Inject, Injectable } from '@angular/core';
import { GREETER, Greeter } from '../classes/greeter.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [{
    firstName: 'Nooranshah',
    lastName: 'Amirshah'
  }, {
    firstName: 'Amir',
    lastName: '000'
  }, {
    firstName: 'Noorjan',
    lastName: '1111'
  }, {
    firstName: 'Nooran Shah',
    lastName: 'Amirshah'
  }]
  constructor(@Inject(GREETER) public greeter:typeof Greeter) { }

  getUser() {
    const user = this.users[Math.floor(Math.random() * this.users.length)]
    return new this.greeter(user);
  }
}
