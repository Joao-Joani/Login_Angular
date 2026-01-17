import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../../../services/auth';

@Component({
  selector: 'app-sign',
  standalone: false,
  templateUrl: './sign.html',
  styleUrl: './sign.scss',
})
export class Sign implements OnInit {
  private formBuilder = inject(FormBuilder);
  private authService = inject(Auth);

  public formAuth: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  public msgError!: string;

  ngOnInit(): void {}

  public submitForm() {
    if (this.formAuth.valid) {
      this.authService
        .sign({
          email: this.formAuth.value.email,
          password: this.formAuth.value.password,
        })
        .subscribe({
          next: (res) => res,
          error: (e) => (this.msgError = e),
        });
    }
  }
}