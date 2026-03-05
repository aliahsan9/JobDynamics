import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
selector:'app-privacy-policy',
templateUrl:'./privacy-policy.component.html',
styleUrls:['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent {

constructor(private title:Title, private meta:Meta){

this.title.setTitle('Privacy Policy - JobDynamics');

this.meta.updateTag({
name:'description',
content:'Privacy Policy for JobDynamics explaining how user data is collected and used on our job portal.'
});

}

}