import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Blog {
  title: string;
  slug: string;
  description?: string;
}

@Component({
  selector: 'app-blogs',
  imports:[RouterModule, CommonModule],
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = [];

  ngOnInit(): void {
    // Sample blog data (replace with API call if needed)
    this.blogs = [
      { title: 'How to Prepare for Interviews', slug: 'prepare-for-government-jobs' },
      { title: 'Top Career Tips in 2026', slug: 'top-it-jobs-pakistan' },
      { title: 'Resume Writing Tips', slug: 'resume-writing-tips' },
      { title: 'Networking Strategies', slug: 'networking-strategies' },
      { title: 'Effective Job Searching', slug: 'job-searching' },
      { title: 'Personal Branding Tips', slug: 'personal-branding' },
    ];
  }
}