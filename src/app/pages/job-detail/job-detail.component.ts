import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { Job } from '../../models/job.model';
import { CommonModule } from '@angular/common';
import { MarkdownComponent } from 'ngx-markdown';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, MarkdownComponent],
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent {

  job!: Job; // assume job always exists after lookup

  constructor(
    private route: ActivatedRoute,
    private content: ContentService,
    private title: Title,
    private meta: Meta
  ){
    const slug = this.route.snapshot.paramMap.get('slug');
    if(slug){
      const foundJob = this.content.getJobBySlug(slug);
      if(foundJob){
        this.job = foundJob;
        this.title.setTitle(`${this.job.title} | JobDynamics`);
        this.meta.updateTag({
          name:'description',
          content:`${this.job.title} Apply online before ${this.job.lastDate}`
        });
      }
    }
  }
}