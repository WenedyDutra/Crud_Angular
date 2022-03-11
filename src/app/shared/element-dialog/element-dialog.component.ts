import { Component, Inject, OnInit } from '@angular/core';
import { PeriodicElement } from 'src/app/views/home/home.component';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.scss']
})
export class ElementDialogComponent implements OnInit {
  element!: PeriodicElement;
  isChange!:boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: PeriodicElement,
    public dialogRef: MatDialogRef<ElementDialogComponent>,
    ) {}

  ngOnInit(): void {
    debugger;
    if(this.data.position != null) {
      this.isChange = true;
      console.log(this.data);
    }else {
      this.isChange = false;
    }
    console.log(this.data);
    console.log(this.isChange);
  }
  onCancel(): void {
    this.dialogRef.close();
  }
}
