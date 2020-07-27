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
showTable: boolean = false;
  constructor(private fileService:UploadService ) { }

  ngOnInit() {
  }
handleFileInput(file: FileList){
  this.fileToUpload=file.item(0);
}

onSubmit(Image: any){
  this.showTable= true;
  console.log(this.fileToUpload);
  let _fileName: string = this.fileToUpload.name;
  console.log(_fileName);
  if(this.fileToUpload.size > 0 && _fileName.match("Transaction\\d{1,}\\.xl*")) {
    this.fileService.postFile(this.fileToUpload).subscribe(
      (result : Transaction[]) =>{
        console.log(result);
        this.showTable= true;
      }
    );
  } else {
    alert("Invalid file type/name");
  }
  

}
}
