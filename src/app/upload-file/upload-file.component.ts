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
  progressVisible=false

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
    this.progressVisible=true
    this.base.uploadFile(this.selectedFiles).subscribe(
      (p:any)=>{
        this.percentage=p?Math.round(p):0
        if (this.percentage==100) 
        setTimeout(()=>{
          this.progressVisible=false
    },2000)
      }
    )
    this.selectedFiles=undefined
  }
}
