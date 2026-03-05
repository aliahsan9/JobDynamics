import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private title: Title, private meta: Meta) {

    this.title.setTitle('About JobDynamics - Pakistan Job Portal');

    this.meta.updateTag({
      name: 'description',
      content: 'Learn about JobDynamics, a platform that provides latest government and private job updates in Pakistan along with career guidance and job preparation resources.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'about jobdynamics, pakistan jobs website, government jobs pakistan, career guidance pakistan'
    });

  }

}