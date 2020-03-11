import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  message = '';
  messageType =  '';

  student: any;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.message = '';
      }
    });
  }


  error(message) {
    this.messageType = 'danger';
    this.message = message;
  }

  success(message) {
    this.messageType = 'success';
    this.message = message;
  }


  getProfile() {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      let payload;
      if (token) {
        payload = token.split('.')[1];
        payload = JSON.parse(window.atob(payload));
      }
      this.student = payload.student;
    }
  }


}
