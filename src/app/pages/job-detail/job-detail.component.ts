import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { Job } from '../../models/job.model';
import { CommonModule } from '@angular/common';
import { MarkdownComponent } from "ngx-markdown";
import { Title, Meta } from '@angular/platform-browser';

@Component({
selector: 'app-job-detail',
imports: [CommonModule, RouterModule, MarkdownComponent],
templateUrl: './job-detail.component.html'
})
export class JobDetailComponent {

job?: Job;
constructor(
private route: ActivatedRoute,
private content: ContentService,
private title: Title,
private meta: Meta
){

const slug = this.route.snapshot.paramMap.get('slug');

if(slug){
this.job = this.content.getJobBySlug(slug);

if(this.job){
this.title.setTitle(this.job.title + ' | JobDynamics');

this.meta.updateTag({
name:'description',
content:this.job.title + ' Apply online before ' + this.job.lastDate
});
}

}

}

}