import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from 'src/app/services/data.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  btnDisabled = false;

  constructor(
    private data: DataService,
    private rest: RestApiService,
    private router: Router,
    private snackbar: MatSnackBar,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      reference: ['', Validators.required]
    });
  }


  login() {
    this.btnDisabled = true;
    this.rest.post('/signin', this.loginForm.value).subscribe(data => {
      localStorage.setItem('token', data.token);
      this.snackbar.open('Login Successfull', 'OK', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      this.router.navigate(['']);
    }, err => {
      if (err.message) {
        this.data.error(err.message);
      }
      if (err.error.message) {
        this.data.error(err.error.message);
      }
    });
  }

}
