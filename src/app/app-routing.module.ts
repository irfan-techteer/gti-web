import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './component/todos/todos.component';
// import { AboutComponent } from './component/about/about.component';
import { NewsComponent } from './component/news/news.component';
import { GetBestOfferComponent } from './component/get-best-offer/get-best-offer.component';
import { DefaulterComponent } from './component/defaulter/defaulter.component';
import { JobJunctionComponent } from './component/job-junction/job-junction.component';
import { TrueFindComponent } from './component/true-find/true-find.component';
import { ToolsComponent } from './component/tools/tools.component';
import { GTIComponent } from './component/gti/gti.component';
import { FollowUsComponent } from './component/follow-us/follow-us.component';
import { NotificationComponent } from './component/notification/notification.component';

const routes: Routes = [
  { path: '', component: TodosComponent},
  { path: 'news', component: NewsComponent},
  { path: 'get-best-offer', component: GetBestOfferComponent},
  { path: 'defaulter', component: DefaulterComponent},
  { path: 'job-junction', component: JobJunctionComponent},
  { path: 'true-find', component: TrueFindComponent},
  { path: 'tools', component: ToolsComponent},
  { path: 'gti', component: GTIComponent},
  { path: 'follow-us', component: FollowUsComponent},
  { path: 'notification', component: NotificationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
