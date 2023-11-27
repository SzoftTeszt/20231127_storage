import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {

  selectedFiles:any
  percentage=0

  constructor(private base:BaseService){}

  fileSelect(event:any){
    if (event.target.files[0].type.includes('image'))
    {
      this.selectedFiles=event.target.files[0]
      console.log(event.target.files)
      this.percentage=0
    }
  }

  uploadFile(){
    this.base.uploadFile(this.selectedFiles).subscribe(
      (p:any)=>this.percentage=p?Math.round(p):0
    )
    this.selectedFiles=undefined
  }
}
