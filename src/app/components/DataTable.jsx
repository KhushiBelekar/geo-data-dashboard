import { useState, useMemo } from "react";
import "./DataTable.css";

const PAGE_SIZE = 10;

export default function DataTable({ data, selectedId, onSelect }) {
  const [page, setPage] = useState(1);
  const [sortKey, setSortKey] = useState("name");
  const [sortDir, setSortDir] = useState("asc");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");

  const processedData = useMemo(() => {
    let rows = [...data];

    // Search filter
    if (searchTerm.trim() !== "") {
      const lowerSearch = searchTerm.toLowerCase();
      rows = rows.filter(r => r.name.toLowerCase().includes(lowerSearch));
    }

    // Status filter
    if (statusFilter !== "ALL") {
      rows = rows.filter(r => r.status === statusFilter);
    }

    // Sort
    rows.sort((a, b) => {
      const valA = a[sortKey];
      const valB = b[sortKey];
      if (valA < valB) return sortDir === "asc" ? -1 : 1;
      if (valA > valB) return sortDir === "asc" ? 1 : -1;
      return 0;
    });

    return rows;
  }, [data, sortKey, sortDir, statusFilter, searchTerm]);

  // Reset to page 1 when filters/search change (optional but recommended)
  // You can add a useEffect for that if you want

  const start = (page - 1) * PAGE_SIZE;
  const paginated = processedData.slice(start, start + PAGE_SIZE);
  const totalPages = Math.ceil(processedData.length / PAGE_SIZE);

  function handleSort(key) {
    if (sortKey === key) {
      setSortDir(d => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  return (
    <>
      {/* SEARCH BAR */}
      <div className="table-controls">
        <input
          type="text"
          placeholder="Search by Project name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{ marginRight: "10px" }}
        />

        {/* FILTER */}
        <select onChange={e => setStatusFilter(e.target.value)} value={statusFilter}>
          <option value="ALL">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>Project</th>
            <th onClick={() => handleSort("latitude")}>Latitude</th>
            <th onClick={() => handleSort("longitude")}>Longitude</th>
            <th>Status</th>
            <th>Updated</th>
          </tr>
        </thead>

        <tbody>
          {paginated.map(item => (
            <tr
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={selectedId === item.id ? "active" : ""}
            >
              <td>{item.name}</td>
              <td>{item.latitude}</td>
              <td>{item.longitude}</td>
              <td>{item.status}</td>
              <td>{item.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINATION */}
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>Prev</button>
        <span>{page} / {totalPages}</span>
        <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>Next</button>
      </div>
    </>
  );
}

