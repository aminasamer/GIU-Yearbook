/* =====================================================================
   FILE: src/app/components/student-card/student-card.ts
   WHAT: One card showing a student's photo, name, faculty and quote.
   WHY:  The students page loops over all students and shows one card
         for each. The card only displays; it never loads data itself.
   ===================================================================== */
import { Component, computed, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-card',
  imports: [RouterLink],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css',
})
export class StudentCard {
  // The parent page gives us one student through this input.
  readonly student = input.required<Student>();

  // Did the portrait fail to load?
  private readonly imageFailed = signal(false);

  // The path actually shown: placeholder if the real image failed.
  protected readonly photoSrc = computed(() =>
    this.imageFailed() ? 'images/placeholder-portrait.svg' : this.student().photo,
  );

  // Called by the template when the image cannot be loaded.
  protected onImageError(): void {
    this.imageFailed.set(true);
  }
}