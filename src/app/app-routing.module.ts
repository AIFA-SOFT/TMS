import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { environment } from '@env/environment';
import { AuthGuard } from '@app/auth/auth.guard';
import { BoardsComponent } from '@app/boards/boards.component';
import { BoardComponent } from '@app/boards/board/board.component';
import { UserProfileComponent } from '@app/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/boards',
  },
  {
    path: 'boards',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: BoardsComponent,
        data: { routeTitle: `Projeler | ${environment.projectTitle}` },
      },
      { path: ':id', component: BoardComponent },
    ],
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
    data: { routeTitle: `Profil | ${environment.projectTitle}` },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
