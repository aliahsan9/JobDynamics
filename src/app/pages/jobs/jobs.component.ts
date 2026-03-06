import { Component } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Job } from '../../models/job.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-jobs',
imports:[RouterModule, CommonModule],
templateUrl: './jobs.component.html',
styleUrl:'./jobs.component.css'
})
export class JobsComponent {

jobs: Job[] = [];

constructor(private content: ContentService){
this.jobs = this.content.getJobs();
}

}