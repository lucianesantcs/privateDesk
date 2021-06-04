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

  note: Notes = {
    title: 'Nota nova',
    description: 'Descrição',
    date: '11/11/1111',
    tags: ['tag', 'tag 2'],
    isPrivate: true,
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
