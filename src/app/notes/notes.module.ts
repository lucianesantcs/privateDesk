import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { PrivateNotesComponent } from './private-notes/private-notes.component';
import { NotesComponent } from './notes.component';
import { NotesHeaderComponent } from './components/notes-header/notes-header.component';
import { NoteComponent } from './components/note/note.component';
import { NotesRoutingModule } from './notes.routing.module';
import { AllNotesComponent } from './all-notes/all-notes.component';

@NgModule({
  declarations: [AddNotesComponent, PrivateNotesComponent, NotesHeaderComponent, NotesComponent, NoteComponent, AllNotesComponent],
  imports: [CommonModule, NotesRoutingModule, FormsModule],
  exports: [NotesComponent]
})
export class NotesModule {}
