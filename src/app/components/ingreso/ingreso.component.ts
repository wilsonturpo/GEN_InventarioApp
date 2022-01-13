import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm){
    console.log(loginForm.value)
  }

}
