import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { JobsComponent } from "../jobs/jobs.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [JobsComponent]
})
export class HomeComponent {

  constructor(private title: Title, private meta: Meta) {

    this.title.setTitle('JobDynamics - Latest Government & Private Jobs in Pakistan');

    this.meta.updateTag({
      name: 'description',
      content: 'Find latest government jobs and private jobs in Pakistan. Daily job updates, career blogs and opportunities across Pakistan.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'Pakistan jobs, government jobs Pakistan, private jobs Pakistan, latest jobs Pakistan'
    });

  }

}