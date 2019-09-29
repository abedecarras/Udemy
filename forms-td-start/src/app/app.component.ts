import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('userForm', {static: false}) signupForm:NgForm;

  defaultQuestion: string = 'teacher';
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(userForm: NgForm) {
  //   console.log('Submitted!');
    
  //   console.log(userForm);
    
  // }

  onSubmit() {
    console.log(this.signupForm);
    
  }
}
