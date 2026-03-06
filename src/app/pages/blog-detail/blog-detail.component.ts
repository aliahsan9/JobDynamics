import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MarkdownComponent } from "ngx-markdown";

interface Blog {
  title: string;
  slug: string;
  file?: string;
}

@Component({
  selector: 'app-blog-detail',
  imports: [CommonModule, RouterModule, MarkdownComponent],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog: Blog | null = null;
  filePath: string = '';
  loading: boolean = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');

    // Simulated fetch (replace with API call)
    setTimeout(() => {
      // Sample blogs
      const blogs: Blog[] = [
        { title: 'How to Prepare for Interviews', slug: 'prepare-for-government-jobs', file: 'assets/blogs/govt-job-preparation.md' },
        { title: 'Resume Writing Tips', slug: 'resume-writing-tips', file: 'assets/blogs/resume-writing-tips.md' },
      ];

      this.blog = blogs.find(b => b.slug === slug) || null;
      this.filePath = this.blog?.file || '';
      this.loading = false;
    }, 1000);
  }
}