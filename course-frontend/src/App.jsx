import { useState } from 'react';
import './App.css';
import InstructorList from './components/InstructorList';

function App() {
  const [instructors] = useState([
    { id: "1", name: "Alice Joshson", specialization: "Java", status: "ACTIVE", yearsOfExperience: 5 },
    { id: "2", name: "Kumar K.", specialization: "MongoDB", status: "ACTIVE", yearsOfExperience: 8 },
    { id: "3", name: "Michael Chew", specialization: "React", status: "INACTIVE", yearsOfExperience: 4 }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  // Tambah state untuk sorting
  const [sortOption, setSortOption] = useState("name-asc");

  // 1. Filter data dahulu
  const filteredInstructors = instructors.filter((instructor) =>
    instructor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 2. Sort data daripada hasil filter
  const sortedInstructors = [...filteredInstructors].sort((a, b) => {
    if (sortOption === "name-asc") {
      return a.name.localeCompare(b.name);
    }
    if (sortOption === "name-desc") {
      return b.name.localeCompare(a.name);
    }
    if (sortOption === "experience-asc") {
      return a.yearsOfExperience - b.yearsOfExperience;
    }
    if (sortOption === "experience-desc") {
      return b.yearsOfExperience - a.yearsOfExperience;
    }
    return 0;
  });

  return (
    <div className="App">
      <h1 className="page-title">Instructor Management System</h1>

      <div className="toolbar">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={sortOption}
          onChange={(event) => setSortOption(event.target.value)}
        >
          <option value="name-asc">Name A–Z</option>
          <option value="name-desc">Name Z–A</option>
          <option value="experience-asc">Experience Low to High</option>
          <option value="experience-desc">Experience High to Low</option>
        </select>

        <button className="clear-btn" onClick={() => setSearchTerm("")}>Clear</button>
      </div>

      <p className="summary">
        Showing {sortedInstructors.length} of {instructors.length} instructors
      </p>

      {/* Pass data yang telah di-sort ke InstructorList */}
      <InstructorList instructors={sortedInstructors} />
    </div>
  );
}

export default App;