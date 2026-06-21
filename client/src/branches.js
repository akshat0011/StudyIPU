// The five USICT branches, in display order.
// One source of truth so the Dashboard, Resource Hub, and AI Tutor all
// show the exact same options (and they match the codes stored in the
// database's `subjects` table: CSE, IT, ECE, CSAI, CSDS).
export const branches = [
  { code: "CSE", name: "Computer Science & Engineering" },
  { code: "IT", name: "Information Technology" },
  { code: "ECE", name: "Electronics & Communication" },
  { code: "CSAI", name: "CSE – Artificial Intelligence" },
  { code: "CSDS", name: "CSE – Data Science" },
];

// Just the codes, e.g. ["CSE", "IT", ...] — handy for simple dropdowns/tabs.
export const branchCodes = branches.map((b) => b.code);

// Code → full name, e.g. branchNames.CSE === "Computer Science & Engineering".
export const branchNames = Object.fromEntries(
  branches.map((b) => [b.code, b.name])
);
