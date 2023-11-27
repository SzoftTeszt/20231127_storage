import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {

  selectedFiles:any

  constructor(private base:BaseService){}

  fileSelect(event:any){
    this.selectedFiles=event.target.files[0]
    console.log(event.target.files)
  }

  uploadFile(){
    this.base.uploadFile(this.selectedFiles)
  }
}
