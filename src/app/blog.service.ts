import { Injectable } from '@angular/core';
import { BlogPostItem } from './blog-post-item'; 
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class BlogService {

  SERVICEKEY : string = "postkey";
  constructor(
    private localservice: LocalStorageService
  ) { }

    getPost( id: number ) : Promise<BlogPostItem> {
      return new Promise((resolve,reject) =>{
          let str : string = this.localservice.get<string>(this.SERVICEKEY);
          let postlist: BlogPostItem[] = JSON.parse(str);

          for( let i=0; i< postlist.length; i++){
            if(postlist[i].id == id){
              return resolve(postlist[i]);
            }
          }
          return reject("Requested item not found!");
      })
    }

    deletePost( id: number ): Promise<any> {
      return new Promise((resolve,reject) => {
          let str: string= this.localservice.get<string>(this.SERVICEKEY);
          let postlist: BlogPostItem[] = JSON.parse(str);

          for (let i= 0; i< postlist.length; i++){
            if(postlist[i].id == id){
              postlist.splice(1 ,i)

              let newStr = JSON.stringify(postlist);
              this.localservice.set(this.SERVICEKEY, newStr);
              return resolve();
            }
          }
      })
    }

    getList(): Promise<BlogPostItem[]> {
      return new Promise((resolve,reject) =>{
          let str: string = this.localservice.get<string>(this.SERVICEKEY);
          let postlist: BlogPostItem[] = JSON.parse(str);

          return resolve(postlist);
      })
    }

    newPost( newtitle: string, newDescription: string ): Promise<BlogPostItem>{
      return new Promise((resolve,reject) => {
          let newPost: BlogPostItem = {
            id: new Date().getUTCMilliseconds(),
            title: newtitle,
            createdAt: new Date(),
            description: newDescription
          }

          let str: string= this.localservice.get<string>(this.SERVICEKEY);
          let postlist: BlogPostItem[] = JSON.parse(str);

          postlist.push(newPost);

          let newStr= JSON.stringify(postlist);
          this.localservice.set(this.SERVICEKEY, newStr);

          return resolve(newPost);
      })
    }
}
