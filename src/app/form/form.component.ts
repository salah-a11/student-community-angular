import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
  
})
export class FormComponent implements OnInit {

  constructor() { }

  students = [

    {
       name: "Student 1",
       email:"student1@gmail.com",
       dob:"02-10-1992",
       image:"../../assets/1.jpg ",
       age:29 ,
       country: "India",
       
    },

    {
      name: "Student 2",
      email:"student2@gmail.com",
      dob:"15-06-1996",
      image:"../../assets/2.jpg ",
      age:24 ,
      country: "India",
      
    },
   
    {
      name: "Student 3",
      email:"student3@gmail.com",
      dob:"11-12-1994",
      image:"../../assets/3.jpg ",
      age:27 ,
      country: "India",
      
    },

    
    
    
  ];


  ngOnInit(): void {
  }

}
