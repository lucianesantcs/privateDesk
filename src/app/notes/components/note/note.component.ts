import { Component, Input, OnInit } from '@angular/core';
import { Notes } from '../../notes.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() notes: Notes;

  constructor() { }

  ngOnInit(): void {
  }

}
