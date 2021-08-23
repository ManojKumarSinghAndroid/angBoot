import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserlistComponent } from './userlist/userlist.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path:'user-list', component:UserlistComponent},
  { path:'admin-list',component:AdminComponent},
  { path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
