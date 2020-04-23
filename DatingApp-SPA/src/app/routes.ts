import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/Member-List/Member-List.component';
import { ListsComponent } from './lists/lists/lists.component';
import { MessagesComponent } from './messages/messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {
        path:'',
        runGuardsAndResolvers: 'always',
        canActivate : [AuthGuard],
        children : [
            {path: 'members', component: MemberListComponent},
            {path: 'lists', component:ListsComponent},
            {path: 'messages', component: MessagesComponent},
        ]
    },
    {path: '**', redirectTo :'', pathMatch: 'full' }
];