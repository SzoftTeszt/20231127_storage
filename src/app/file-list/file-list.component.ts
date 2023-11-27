import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent {

  filesData:any

  constructor(private base:BaseService){
    this.base.getFilesData().snapshotChanges().pipe(
      map(
        (changes:any)=> changes.map((c:any)=> ({ key: c.payload.key, ...c.payload.val()}))
      )
    ).subscribe(
      (data)=>this.filesData=data
    )
  }

  deleteFile(f:any){
    this.base.deleteFile(f)
  }

}
