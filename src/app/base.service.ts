import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  refFilesData: AngularFireList<any>

  constructor(private storage: AngularFireStorage, private db: AngularFireDatabase ) {
    this.refFilesData = this.db.list('/kepek/');
   }

   getFilesData(){
      return this.refFilesData
   }

  uploadFile(file:any){
    const updateTask=this.storage.upload("/kepek/"+file.name, file)

    updateTask.snapshotChanges()
    .subscribe({
      next:(res)=>{},
      error:(err)=>console.log("Hiba a fájl feltöltésekor", err),
      complete:()=>{
      this.storage.ref("/kepek/"+file.name).getDownloadURL().subscribe(
        (url)=>{
          this.refFilesData.push({name:file.name, url:url})
        }
      )}  
    })
    return updateTask.percentageChanges()
  }


  deleteFile(file:any){
    this.storage.ref("/kepek/"+file.name).delete().subscribe(
      ()=> this.refFilesData.remove(file.key).then(
        ()=>console.log("Sikeres törlés")
      ).catch(
        ()=>console.log("HIBA! A törlésnél!")
      )
    )
  }
}
