import { Component, OnInit, ViewChild } from '@angular/core';
import{ AgePipe } from '../age.pipe';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  @ViewChild('content',{static:true}) content: any;
  
  
  openModal = false;

  studname;
  studmail;
  studdob;
  studcont;
  stimg;
  tempImg;
  isDetails=0;


  constructor() { }

  ngOnInit() {
  }

  handleImageInput(imageInput:any){
    const file = imageInput.files[0];
    const reader = new FileReader()
    reader.addEventListener('load',(e:any)=>{
      this.tempImg = e.target.result
      console.log(this.tempImg)
    })
    reader.readAsDataURL(file)
  }

  onSubmit(frm){
    console.log(frm);
    console.log(frm.value.txtname);
    this.studname = frm.value.txtname;
    this.studmail = frm.value.txtmail;
    this.studdob = frm.value.txtdate;
    this.studcont = frm.value.country;
    this.stimg = this.tempImg;
     this.isDetails = 1;
  }

  




}
