import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricingComponent }      from './pricing/pricing.component';
import { ContactComponent }   from './contact/contact.component';
import { SeekersOverviewComponent } from './seekers-overview/seekers-overview.component'
import { EmployersOverviewComponent } from './employers-overview/employers-overview.component'

import { ViewJobDetailComponent } from './job/view-job-detail/view-job-detail.component'
import { JobApplicationsComponent } from './job/job-applications/job-applications.component'
import { JobSearchComponent } from './job/job-search/job-search.component'
import { JobSpotlightComponent } from './job/job-spotlight/job-spotlight.component'
import { SaveJobComponent } from './job/save-job/save-job.component'
import { SavedJobsComponent } from './job/saved-jobs/saved-jobs.component'
import { SavedSearchesComponent } from './job/saved-searches/saved-searches.component'
import { ViewJobFormComponent } from './job/view-job-form/view-job-form.component'

import { ResumeSearchComponent } from './resume/resume-search/resume-search.component'
import { SaveResumeComponent } from './resume/save-resume/save-resume.component'
import { SavedResumesComponent } from './resume/saved-resumes/saved-resumes.component'
import { SavedResumeSearchesComponent } from './resume/saved-resume-searches/saved-resume-searches.component'
import { ViewInvoicesComponent } from './resume/view-invoices/view-invoices.component'
import { ViewResumeFormComponent } from './resume/view-resume-form/view-resume-form.component'

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'seekers-overview', component: SeekersOverviewComponent },
  { path: 'employers-overview', component: EmployersOverviewComponent },
  { path: 'view-job-detail', component: ViewJobDetailComponent },
  { path: 'resume-search', component: ResumeSearchComponent },
  { path: 'job-search', component: JobSearchComponent },
  { path: 'job-applications', component: JobApplicationsComponent },
  { path: 'view-job-form', component: ViewJobFormComponent },
  { path: 'save-job', component: SaveJobComponent },
  { path: 'view-resume-form', component: ViewResumeFormComponent },
  { path: '', redirectTo: 'contact', pathMatch: 'full' },

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
