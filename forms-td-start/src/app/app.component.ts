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
  answer: string = '';
  genders = ['male', 'female'];
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(userForm: NgForm) {
  //   console.log('Submitted!');
    
  //   console.log(userForm);
    
  // }

  onSubmit() {
    console.log(this.signupForm);
    
  }
}
