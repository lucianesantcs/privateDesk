import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth-guard';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { AllNotesComponent } from './all-notes/all-notes.component';
import { NotesComponent } from './notes.component';
import { PrivateNotesComponent } from './private-notes/private-notes.component';


const notesRoutes: Routes = [
  {
    path: 'notes',
    component: NotesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'all-notes',
        component: AllNotesComponent,
      },
      {
        path: 'add-notes',
        component: AddNotesComponent,
      },
      {
        path: 'private-notes',
        component: PrivateNotesComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(notesRoutes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
