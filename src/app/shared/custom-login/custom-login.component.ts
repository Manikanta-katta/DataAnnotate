import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-custom-login',
  templateUrl: './custom-login.component.html',
  styleUrls: ['./custom-login.component.scss']
})

export class CustomLoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required),
  })

  constructor(private authsService: AuthenticationService,
    private router: Router,
    private toast: HotToastService
   ) { }

  ngOnInit(): void {
  }
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit(){
    if (!this.loginForm.valid) {
      return;
    }
    const { email, password } = this.loginForm.value;
    this.authsService.customlogin(email!, password!).pipe(
      this.toast.observe({
        success: 'logged in succesfully',
        loading: 'logging in..',
        error: 'There was an error'
      })
    )

    .subscribe(() =>{

      this.router.navigate(['/dashboard']);
    });
  }

}
