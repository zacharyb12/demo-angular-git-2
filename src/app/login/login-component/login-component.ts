import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators,  } from '@angular/forms';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-login-component',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent implements OnInit {
  isLogged = signal( false)
  formGroup : FormGroup

private formbuilder =inject(FormBuilder)

constructor()
{
  this.formGroup =this.formbuilder.group({
  email: ["", Validators.required],
  password : ["",Validators.required ]
  })
}



ngOnInit(): void {
}

 login()
  {
    if(this.formGroup.valid)
    {
      const email = this.formGroup.value["email"];
      const password = this.formGroup.value["password"];

    }
  }

 logout()
  {

  }
 

}
