export function downloadBrochure() {
  const element = document.createElement("a");
  const file = new Blob(
    [
      `
============================================================
       SHOBHIT INSTITUTE OF ENGINEERING & TECHNOLOGY
                 (Deemed-to-be University)
============================================================
Approval: Approved by AICTE, Government of India
Admissions & Eligibility criteria: Valid for 2026-2027 sessions

--- RECRUITERS & COHORTS INSIGHTS ---
• Highest Package Profile: INR 12.5 LPA
• Outstanding Placement Record: 97.4%
• Corporate Partners: 150+ Top tech firms and pioneer institutes
• Active Recruiters: 350+ Global industry partners

--- CORE ADMISSION TRACKS ---
• Computer Science & Engineering Focus
• Electronics & Tech Systems
• Computational Humanities 
• Applied Legal Studies

For customized counseling and state eligibility checks,
contact: mail@shobhituniversity.ac.in or NH-58, Modipuram, Meerut.
============================================================
    `,
    ],
    { type: "text/plain" },
  );
  element.href = URL.createObjectURL(file);
  element.download = "Shobhit_University_Syllabus_Brochure_2026.txt";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
