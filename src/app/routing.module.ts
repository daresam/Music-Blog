import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { PostsComponent } from "./blog/posts/posts.component";
import { AlbumsComponent } from "./albums/albums.component";
import { UsersComponent } from "./users/users.component";
import { Page404Component } from "./page404/page404.component";
import { PostComponent } from "./blog/posts/post/post.component";
import { AlbumComponent } from "./albums/album/album.component";


// Routing Set Up
const routes: Routes = [
    {path: 'posts', component: PostsComponent},
    {path: '', redirectTo: 'posts', pathMatch: 'full'},
    {path: 'post/:id', component: PostComponent},
    {path: 'albums', component: AlbumsComponent},
    {path: 'album/:id', component: AlbumComponent},
    {path: 'users', component: UsersComponent},
    {path: '**', component: Page404Component},
];



@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule {}
