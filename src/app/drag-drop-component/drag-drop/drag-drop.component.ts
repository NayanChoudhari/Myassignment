import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import {trigger, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(3000, style({opacity: 1}))
      ]) 
    ])
  ]
})
export class DragDropComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  drop(ev:any): void {
    this.snackBar.open("Dragged Successfully", 'close');
  }

}
