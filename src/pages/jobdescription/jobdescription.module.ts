import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobdescriptionPage } from './jobdescription';

@NgModule({
  declarations: [
    JobdescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(JobdescriptionPage),
  ],
  exports: [
    JobdescriptionPage
  ]
})
export class JobdescriptionPageModule {}
