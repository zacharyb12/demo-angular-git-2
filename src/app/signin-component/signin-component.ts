import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin-component',
  imports: [ReactiveFormsModule],
  templateUrl: './signin-component.html',
  styleUrl: './signin-component.css',
})
export class SigninComponent implements OnInit{

  formGroup: FormGroup;
  isLogged = signal(false);

  private formBuilder = inject(FormBuilder);
  /*private signService = inject(SigninService);*/

  constructor(){
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  signin(){
    if(this.formGroup.valid){
      const email = this.formGroup.value["email"];
      const password = this.formGroup.value["password"];
      /*this.signinService.signin(email, password);*/
    }
  }

  ngOnInit(): void {
      
  }
}
