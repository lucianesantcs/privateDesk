import { Component, OnInit } from '@angular/core';
import { Notes } from '../notes/notes.model';
import { NotesService } from '../notes/notes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  notes: Notes;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.notesService.getNotes().subscribe(note => this.notes = note)
  }

}
