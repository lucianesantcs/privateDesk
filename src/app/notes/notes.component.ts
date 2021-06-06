import { Component, OnInit } from '@angular/core';
import { Notes } from './notes.model';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Notes;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.notesService.getNotes().subscribe(note => this.notes = note)
  }

}
