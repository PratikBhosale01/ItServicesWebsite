import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { ContactFormDialogComponent } from '../contact-form-dialog/contact-form-dialog.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-webdev',
  standalone: true,
  imports: [
    MatButtonModule, MatExpansionModule,
    MatExpansionModule, MatButtonModule
],
  templateUrl: './webdev.component.html',
  styleUrl: './webdev.component.scss'
})
export class WebdevComponent {
   constructor(
      public dialogRef: MatDialogRef<ContactFormDialogComponent>
    ){}
    closeDialog(): void {
      this.dialogRef.close();
    }

}
