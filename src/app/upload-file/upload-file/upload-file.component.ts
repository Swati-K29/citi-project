import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { Transaction } from 'src/app/models/transaction';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
fileToUpload: File;
/*fileForm:FormGroup({
  Image : new FormControl(null)
});*/
  constructor(private fileService:UploadService ) { }

  ngOnInit() {
  }
handleFileInput(file: FileList){
  this.fileToUpload=file.item(0);
}

onSubmit(Image: any){
  console.log(this.fileToUpload);
  if(this.fileToUpload.)
  this.fileService.postFile(this.fileToUpload).subscribe(
    (result : Transaction[]) =>{
      console.log(result);
    }
  );

}
}
