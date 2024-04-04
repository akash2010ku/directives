import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'directives';

  form:FormGroup=new FormGroup({})
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
   this.onFormInit()
   
  }


  onFormInit(){
    this.form=this.fb.group({
      phoneNumber: new FormControl(''),
      aadharNumber:new FormControl('')
    })
  }


  onFormSubmit(){
    console.log(this.form.value)
  }
}
