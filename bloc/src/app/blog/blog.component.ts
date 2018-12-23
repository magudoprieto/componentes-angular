import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { Post } from 'src/app/models/post.models';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
postPintado: Post[];
  constructor(private postService: PostService) {
    
   }

  ngOnInit() {
    
  }

  onChange($event){
    this.postPintado = this.postService.getPostsByCategoria($event.target.value);

    
    console.log($event.target.value);
  }
}
