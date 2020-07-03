import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-goal-dialog',
  templateUrl: './add-goal-dialog.component.html',
  styleUrls: ['./add-goal-dialog.component.scss']
})
export class AddGoalDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddGoalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
   { }

  ngOnInit() {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }


  onConfirm(){
    this.dialogRef.close(true);
  }

}
