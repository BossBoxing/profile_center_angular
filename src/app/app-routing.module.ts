import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AboutComponent } from './about/about.component';
// import { NewsComponent } from './news/news.component';
// import { WorkComponent } from './work/work.component';

const routes: Routes = [
  // { path: 'about', component: AboutComponent },
  // { path: 'work', component: WorkComponent },
  // { path: 'news', component: NewsComponent },
  { path: '', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
