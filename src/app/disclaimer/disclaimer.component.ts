import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
selector:'app-disclaimer',
templateUrl:'./disclaimer.component.html',
styleUrls:['./disclaimer.component.css']
})
export class DisclaimerComponent {

constructor(private title:Title){

this.title.setTitle('Disclaimer - JobDynamics');

}

}