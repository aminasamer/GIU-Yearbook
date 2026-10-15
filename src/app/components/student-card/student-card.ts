/* =====================================================================
   FILE: src/app/components/student-card/student-card.ts
   WHAT: One card showing a student's photo, name, faculty and quote.
   WHY:  The students page loops over all students and shows one card
         for each. The card only displays; it never loads data itself.
   ===================================================================== */
import { Component, input } from '@angular/core';
import { Student } from '../../models/student.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-card',
  imports: [RouterLink],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css',
})
export class StudentCard {
  // The parent page gives us one student through this input.
  readonly student = input.required<Student>();
}