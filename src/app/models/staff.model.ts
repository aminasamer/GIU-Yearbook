/* =====================================================================
   FILE: src/app/models/staff.model.ts
   WHAT: The shape of one staff member.
   WHY:  staff.service.ts imports it; missing from the starter repo.
   ===================================================================== */
export interface StaffMember {
  id: number;
  name: string;
  department: string;
  role: string;
  bio: string;
  quote: string;
  photo: string;
  featured: boolean;
}