import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { PrivateNotesComponent } from './private-notes/private-notes.component';
import { NotesComponent } from './notes.component';
import { NoteComponent } from './components/note/note.component';
import { NotesRoutingModule } from './notes.routing.module';
import { AllNotesComponent } from './all-notes/all-notes.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AddNotesComponent, PrivateNotesComponent, NotesComponent, NoteComponent, AllNotesComponent],
  imports: [CommonModule, NotesRoutingModule, FormsModule, SharedModule],
  exports: [NotesComponent, AllNotesComponent]
})
export class NotesModule {}
