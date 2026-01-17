import { Component, OnInit } from '@angular/core';
import { Auth } from '../../../../core/services/auth';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  constructor(private authService: Auth) {}

  ngOnInit(): void {}

  public logout() {
    this.authService.logout();
  }
}