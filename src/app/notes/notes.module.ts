import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { PrivateNotesComponent } from './private-notes/private-notes.component';
import { NotesComponent } from './notes.component';
import { NotesHeaderComponent } from './components/notes-header/notes-header.component';
import { NotesRoutingModule } from './notes.routing.module';

@NgModule({
  declarations: [AddNotesComponent, PrivateNotesComponent, NotesHeaderComponent, NotesComponent],
  imports: [CommonModule, NotesRoutingModule, FormsModule],
  exports: [NotesComponent, AddNotesComponent, PrivateNotesComponent]
})
export class NotesModule {}
