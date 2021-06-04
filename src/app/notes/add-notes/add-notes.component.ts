import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {

  constructor(private notesService: NotesService, private router: Router) { }

  ngOnInit(): void {
  }

  createNote(): void {
    this.notesService.showMessage('Nota criada com sucesso!')
  }

  cancel(): void {
    this.router.navigate(['/notes']);
  }
}
