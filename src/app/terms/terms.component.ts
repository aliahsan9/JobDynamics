import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
selector:'app-terms',
templateUrl:'./terms.component.html',
styleUrls:['./terms.component.css']
})
export class TermsComponent {

constructor(private title:Title){

this.title.setTitle('Terms and Conditions - JobDynamics');

}

}