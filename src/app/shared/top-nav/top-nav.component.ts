import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class topNavComponent implements OnInit {

  constructor(public authService: AuthenticationService, private router: Router,
    private toast: HotToastService) { }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logout().pipe(
      this.toast.observe({
        success: 'logout succesfully',
        loading: 'logging in..',
        error: 'There was an error'
      })
    )
    .subscribe(() => {
      this.router.navigate(['']);
    });
  }

}


