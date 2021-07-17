import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Notes } from '../notes.model';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {
  form: FormGroup;

  createdAt = new Date().getTime().toString();

  constructor(private notesService: NotesService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null],
      date: this.createdAt,
      tags: [null],
      isPrivate: [null, Validators.required],
    });
  }


  createNote(): void {
    this.notesService.createNote(this.form.value).subscribe(() => {
      this.notesService.showMessage('Nota criada com sucesso!')
      this.router.navigate(['/notes/all-notes']);
    })
  }

  cancel(): void {
    this.router.navigate(['/notes/all-notes']);
  }

  checkValidTouched(field) {
    return !this.form.get(field).valid && (this.form.get(field).touched || this.form.get(field).dirty);
  }

  classError(field) {
    return {
      'has-error': this.checkValidTouched(field),
    };
  }
}
