import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private title: Title, private meta: Meta) {

    this.title.setTitle('Contact JobDynamics - Pakistan Job Portal');

    this.meta.updateTag({
      name: 'description',
      content: 'Contact JobDynamics for questions, feedback, or job listing inquiries. We help job seekers across Pakistan find the latest government and private jobs.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'contact jobdynamics, pakistan job portal contact, government jobs pakistan help'
    });

  }

}