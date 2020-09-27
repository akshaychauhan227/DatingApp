import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/Member-List/Member-List.component';
import { ListsComponent } from './lists/Lists-component/lists.component';
import { MessagesComponent } from './messages/Messages-component/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MemberDetailResolver } from './_resolvers/member-details.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PrevetUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { ListsResolver } from './_resolvers/lists.resolver';

export const appRoutes: Routes = 
[   {path: 'home', component:HomeComponent},
    {
        path:'',
        //runGuardsAndResolvers: '',
        canActivate : [AuthGuard],
        children : [
            {path: 'members', component: MemberListComponent , resolve:{usersResolver:MemberListResolver}},
            {path: 'members/:id', component: MemberDetailsComponent, resolve:{userResolver : MemberDetailResolver}},
            {path :'member/edit', component: MemberEditComponent, resolve:{editResolver : MemberEditResolver}, canDeactivate:[PrevetUnsavedChanges]},
            {path: 'messages', component: MessagesComponent},
            {path: 'lists', component:ListsComponent, resolve:{listsResolver : ListsResolver}},
            
        ]
    },
    {path: '**', redirectTo :'home', pathMatch: 'full'}
];