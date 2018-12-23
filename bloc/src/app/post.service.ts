import { Injectable } from '@angular/core';
import { Post } from '../app/models/post.models';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrPost: Post[];
  
  constructor() {
    this.arrPost = [
      new Post('dsfsd','sdds','sdsd','dsds','dsd','sdsd')
    ];
    console.log(this.arrPost);
  
  
  }

   agregarPost(post: Post){
     //este método nos debe permitir agregar post cuando se le indiquemos en el form de new
     this.arrPost.push(post);
     let arrStr = JSON.stringify(this.arrPost);
     localStorage.setItem('lista_post_v1',arrStr);
  
   }

   getAllPost(){
      if(localStorage.getItem('lista_post')){
        let listaStr = localStorage.getItem('lista_post_v1'); //recuperamos los datos en string
        let listadoObj = JSON.parse(listaStr); //parseo el strin para convertirolo en objeto
        return Promise.resolve(listadoObj);
      
      
      
      }else{
        return this.arrPost;
      }
      
   }

   getPostsByCategoria(cat){
      if (cat === 'all'){
        return this.arrPost;
      } else {
       /* let filterArr = this.arrPost.filter((item)=>{
          return item.categoria == cat;
        });
        return filterArr;*/
        return this.arrPost.filter(item => item.categoria === cat);
      }
   }

}
