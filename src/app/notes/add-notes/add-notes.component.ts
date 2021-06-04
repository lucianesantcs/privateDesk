import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notes } from '../notes.model';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {

  createdAt = new Date().getTime().toString();

  note: Notes = {
    title: '',
    description: '',
    date: this.createdAt,
    tags: [],
    isPrivate: false,
  }

  constructor(private notesService: NotesService, private router: Router) { }

  ngOnInit(): void {
  }


  createNote(): void {
    this.notesService.createNote(this.note).subscribe(() => {
      this.notesService.showMessage('Nota criada com sucesso!')
      this.router.navigate(['/notes']);
    })
  }

  cancel(): void {
    this.router.navigate(['/notes']);
  }
}
