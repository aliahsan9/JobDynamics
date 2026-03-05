import { Injectable } from '@angular/core';
import { JOBS } from '../data/jobs.data';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

getJobs(){
return JOBS;
}

getJobBySlug(slug:string){
return JOBS.find(j => j.slug === slug);
}

}