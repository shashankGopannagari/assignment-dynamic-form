import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';
  dynamicForm: FormGroup;
constructor(private fb: FormBuilder){

}

ngOnInit(){
  this.dynamicForm = this.fb.group({
    firstName : [this.obj.schema.properties.firstName.default, 
    [Validators.required,
     Validators.minLength(2)
     ]],
    lastName: ['Doe',Validators.required],
    age: [''],
    bio: [''],
    password: ['',Validators.minLength(3)],
    telephone: ['',[Validators.required,
              Validators.minLength(10)]]
})
}
get firstName(){
 return this.dynamicForm.get('firstName');
}

get lastName(){
 return  this.dynamicForm.get('lastName');
}

get password(){
  return this.dynamicForm.get('password');
}

get telephone(){
  return this.dynamicForm.get('telephone');
}
  obj = 
    {
      "schema": {
        "title": "A registration form",
        "description": "A simple form example.",
        "type": "object",
        "required": [
          "firstName",
          "lastName"
        ],
        "properties": {
          "firstName": {
            "type": "string",
            "title": "First name",
            "default": "Chuck"
          },
          "lastName": {
            "type": "string",
            "title": "Last name"
          },
          "age": {
            "type": "integer",
            "title": "Age"
          },
          "bio": {
            "type": "string",
            "title": "Bio"
          },
          "password": {
            "type": "string",
            "title": "Password",
            "minLength": 3
          },
          "telephone": {
            "type": "string",
            "title": "Telephone",
            "minLength": 10
          }
        }
      }
    }



onSubmit(){
  console.table(this.dynamicForm.value);
}







}
