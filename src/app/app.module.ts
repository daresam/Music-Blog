import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { BlogService } from './services/blog.service';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { PostsComponent } from './blog/posts/posts.component';
import { CommentsComponent } from './blog/posts/comments/comments.component';
import { AlbumsComponent } from './albums/albums.component';
import { UsersComponent } from './users/users.component';
import { RoutingModule } from './routing.module';
import { Page404Component } from './page404/page404.component';
import { PostComponent } from './blog/posts/post/post.component';
import { PostCardComponent } from './blog/posts/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    PostsComponent,
    CommentsComponent,
    AlbumsComponent,
    UsersComponent,
    Page404Component,
    PostComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
