import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { SeekersOverviewComponent } from './seekers-overview/seekers-overview.component';
import { EmployersOverviewComponent } from './employers-overview/employers-overview.component';
import { ViewJobDetailComponent } from './job/view-job-detail/view-job-detail.component';
import { ViewResumeFormComponent } from './resume/view-resume-form/view-resume-form.component';
import { SaveResumeComponent } from './resume/save-resume/save-resume.component';
import { SavedResumesComponent } from './resume/saved-resumes/saved-resumes.component';
import { ResumeSearchComponent } from './resume/resume-search/resume-search.component';
import { ViewInvoicesComponent } from './resume/view-invoices/view-invoices.component';
import { JobApplicationsComponent } from './job/job-applications/job-applications.component';
import { SavedJobsComponent } from './job/saved-jobs/saved-jobs.component';
import { ViewJobFormComponent } from './job/view-job-form/view-job-form.component';
import { SaveJobComponent } from './job/save-job/save-job.component';
import { JobSearchComponent } from './job/job-search/job-search.component';
import { JobSpotlightComponent } from './job/job-spotlight/job-spotlight.component';
import { SavedResumeSearchesComponent } from './resume/saved-resume-searches/saved-resume-searches.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    PricingComponent,
    SeekersOverviewComponent,
    EmployersOverviewComponent,
    ViewJobDetailComponent,
    ViewResumeFormComponent,
    SaveResumeComponent,
    SavedResumesComponent,
    ResumeSearchComponent,
    ViewInvoicesComponent,
    JobApplicationsComponent,
    SavedJobsComponent,
    ViewJobFormComponent,
    SaveJobComponent,
    JobSearchComponent,
    JobSpotlightComponent,
    SavedResumeSearchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
