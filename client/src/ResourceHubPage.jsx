import { useState } from "react";

const branches = ["CSE", "IT", "ECE", "AIML", "AIDS"];

const branchNames = {
  CSE: "Computer Science & Engineering",
  IT: "Information Technology",
  ECE: "Electronics & Communication",
  AIML: "AI & Machine Learning",
  AIDS: "AI & Data Science",
};

const semesters = ["1", "2", "3", "4", "5", "6", "7", "8"];

const contentTabs = [
  { id: "syllabus", label: "Syllabus" },
  { id: "notes", label: "Notes" },
  { id: "lectures", label: "Lectures" },
  { id: "papers", label: "IPU Past Papers (PYQs)" },
];

const subjects = [
  {
    code: "CIC-201",
    name: "Data Structures & Algorithms",
    credits: 4,
    desc: "Foundational course on linear & non-linear data structures, search-sort algorithms, time/space complexity analysis.",
    units: [
      { title: "Unit I: Arrays & Stacks", desc: "Address calculation, row/column major, Stack application (infix-postfix, evaluation), Queue variations." },
      { title: "Unit II: Linked Lists & Trees", desc: "Singly, doubly, circular list, binary trees, heap tree insertion, deletion, and heap-sort." },
      { title: "Unit III: Binary Search Trees & Graphs", desc: "BST operations, AVL rotations, graph representations (adj matrix/list), BFS, DFS, Kruskals & Prims." },
      { title: "Unit IV: Sorting & Hashing", desc: "Quick sort, merge sort, hash functions, collision resolution methods." },
    ],
  },
  {
    code: "CIC-203",
    name: "Database Management Systems",
    credits: 4,
    desc: "Core database concepts — relational model, SQL, normalization, transactions, and concurrency control.",
    units: [
      { title: "Unit I: ER & Relational Model", desc: "Entities, attributes, relationships, keys, relational algebra, and tuple calculus." },
      { title: "Unit II: SQL & Database Design", desc: "DDL, DML, joins, nested queries, views, and integrity constraints." },
      { title: "Unit III: Normalization", desc: "Functional dependencies, 1NF to BCNF, decomposition, and lossless joins." },
      { title: "Unit IV: Transactions & Concurrency", desc: "ACID properties, schedules, locking protocols, and deadlock handling." },
    ],
  },
];

function ResourceHubPage() {
  const [branch, setBranch] = useState("CSE");
  const [semester, setSemester] = useState("3");
  const [selectedCode, setSelectedCode] = useState("CIC-201");
  const [activeTab, setActiveTab] = useState("syllabus");

  const selected = subjects.find((s) => s.code === selectedCode);
  const activeLabel = contentTabs.find((t) => t.id === activeTab).label;

  return (
    <div className="page">
      <div className="hub-filter">
        <div className="filter-group">
          <span className="filter-label">USICT Branch</span>
          <div className="branch-tabs">
            {branches.map((b) => (
              <button
                key={b}
                className={b === branch ? "branch-tab active" : "branch-tab"}
                onClick={() => setBranch(b)}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-divider"></div>

        <div className="filter-group">
          <span className="filter-label">Current Semester</span>
          <select value={semester} onChange={(e) => setSemester(e.target.value)}>
            {semesters.map((s) => (
              <option key={s} value={s}>Semester {s}</option>
            ))}
          </select>
        </div>

        <div className="filter-right">
          <span className="filter-label">Filtering Syllabus</span>
          <span className="filter-branch-name">{branchNames[branch]}</span>
        </div>
      </div>

      <div className="hub-grid">
        <aside>
          <div className="catalog-label">Semester Subject Catalog</div>
          <div className="cat-list">
            {subjects.map((s) => (
              <button
                key={s.code}
                className={s.code === selectedCode ? "cat-card active" : "cat-card"}
                onClick={() => setSelectedCode(s.code)}
              >
                <div className="cat-card-top">
                  <span className="cat-code">{s.code}</span>
                  <span className="cat-cr">{s.credits} Credits</span>
                </div>
                <div className="cat-name">{s.name}</div>
              </button>
            ))}
          </div>
        </aside>

        <main className="hub-detail">
          <div className="detail-top">
            <span className="course-badge">Official GGSIPU Course: {selected.code}</span>
            <span className="exam-weight">Exam Weightage: Continuous evaluation criteria applies</span>
          </div>

          <h2 className="detail-title">{selected.name}</h2>
          <p className="detail-desc">{selected.desc}</p>

          <div className="detail-tabs">
            {contentTabs.map((t) => (
              <button
                key={t.id}
                className={t.id === activeTab ? "detail-tab active" : "detail-tab"}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {activeTab === "syllabus" ? (
            <div>
              <div className="units-label">Official Syllabus Units</div>
              <div className="units-grid">
                {selected.units.map((u, i) => (
                  <div className="unit-card" key={u.title}>
                    <span className="unit-num">{String(i + 1).padStart(2, "0")}</span>
                    <h4 className="unit-title">{u.title}</h4>
                    <p className="unit-desc">{u.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="tab-empty">
              {activeLabel} for {selected.name} will be added here soon.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default ResourceHubPage;