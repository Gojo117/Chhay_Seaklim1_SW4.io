import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contact = {
    fullname:'',
    email:'',
    phone:'',
    message:'',
}
  listcontact: any[]=[];
  editindex: number = -1;
  saveData(){
    if(!this.contact.fullname || !this.contact.email || !this.contact.phone || !this.contact.message){
        alert("Please input all field");
        return;
    }
    if(this.editindex==-1){

      this.listcontact.push({
        fullname: this.contact.fullname,
        email: this.contact.email,
        phone: this.contact.phone,
        message: this.contact.message
      });
      alert("Contact add successfully!")
    }else{
      // update contact information
      this.listcontact[this.editindex]={
        fullname: this.contact.fullname,
        email: this.contact.email,
        phone: this.contact.phone,
        message: this.contact.message,

      }
    alert("Contact update successfully!");
    this.editindex=-1;
    }
    this.contact.fullname='';
    this.contact.email='';
    this.contact.phone='';
    this.contact.message='';
  }

  editData(index : number){
    this.contact={
      fullname : this.listcontact[index].fullname,
      email : this.listcontact[index].email,
      phone : this.listcontact[index].phone,
      message : this.listcontact[index].message,
    }
    this.editindex=index;
  }
  deleteData(index : number){
    if(confirm("Are you sure do you want to delete contact?")){
      this.listcontact.splice(index,1);
       if(this.editindex== index){
        this.editindex==-1;
      }
    }
  }
}
