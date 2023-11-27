import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private storage: AngularFireStorage, private db: AngularFireDatabase ) { }

  uploadFile(file:any){
    this.storage.upload("/kepek/"+file.name, file).snapshotChanges()
    .subscribe({
      next:(res)=>console.log("Feltöltés: ",res),
      error:(err)=>console.log("Hiba a fájl feltöltésekor", err),
      complete:()=>{
      this.storage.ref("/kepek/"+file.name).getDownloadURL().subscribe(
        (url)=>{
          this.db.list('/kepek/').push({name:file.name, url:url})
        }
      )
     }
  
    })
  }
}
