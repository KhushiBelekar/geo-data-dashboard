import { useState } from "react";
import { useProjects } from "../hooks/useProjects";
import DataTable from "../components/DataTable";
import MapView from "../components/MapView";
import "./Dashboard.css";

export default function Dashboard() {
  const { projects } = useProjects();
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="dashboard">
      <div className="dashboard-header">🌍 Geo Data Dashboard</div>

      <div className="dashboard-content">
        <div className="card table-card">
          <DataTable
            data={projects}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>

        <div className="card">
          <MapView
            data={projects}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>
      </div>
    </div>
  );
}
