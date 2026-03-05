import { Component } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Job } from '../../models/job.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-jobs',
imports:[RouterModule, CommonModule],
templateUrl: './jobs.component.html'
})
export class JobsComponent {

jobs: Job[] = [];

constructor(private content: ContentService){
this.jobs = this.content.getJobs();
}

}