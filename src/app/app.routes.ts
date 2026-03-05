import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { TermsComponent } from './terms/terms.component';

export const routes: Routes = [
    { path:'', component: HomeComponent },

{ path:'jobs', component: JobsComponent },

{ path:'job/:slug', component: JobDetailComponent },

{ path:'blogs', component: BlogsComponent },

{ path:'blog/:slug', component: BlogDetailComponent },

{ path:'about', component: AboutComponent },

{ path:'contact', component: ContactComponent },
{path:'privacy-policy',component:PrivacyPolicyComponent},
{path:'disclaimer',component:DisclaimerComponent},
{path:'terms',component:TermsComponent}
];
