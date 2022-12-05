import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DATA_MODEL } from "src/app/shared/models/user.model";

@Component({
  selector: 'confirm-delete',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data:DATA_MODEL,public dialogRef: MatDialogRef<ConfirmDialog>,) {}


  delete(){
    this.dialogRef.close(true)
    
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}