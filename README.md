# Geo Data Dashboard

A React-based Geo Data Dashboard that visualizes spatial and tabular project data using an interactive table and map.  
The application demonstrates clean component architecture, efficient handling of large datasets, and synchronization between UI elements and map interactions.

---

## Tech Stack

- **React** (Vite)
- **Functional Components & Hooks only**
- **Leaflet / react-leaflet** for map integration
- **Custom CSS** for styling
- **Local state management** (no Redux or external state libraries)

---

## 📂 Project Structure
src/
├── app/
│ ├── components/
│ │ ├── DataTable.jsx
│ │ ├── DataTable.css
│ │ └── MapView.jsx
│ ├── pages/
│ │ ├── Dashboard.jsx
│ │ └── Dashboard.css
│ ├── hooks/
│ │ └── useProjects.js
│ ├── data/
│ │ └── projects.json
│ └── App.jsx
│
├── assets/
├── App.css
├── index.css
└── main.jsx

text

---

## Features

### Data Table
- Displays paginated project data fetched from a mock JSON source
- Columns:
  - Project Name
  - Latitude
  - Longitude
  - Status
  - Last Updated
- Client-side sorting on table columns
- Client-side filtering based on project status
- Pagination to efficiently handle large datasets (5k+ rows)

---

### Map Integration
- Interactive map rendered using Leaflet
- Project locations plotted using latitude and longitude
- **Two-way synchronization**:
  - Clicking a table row highlights the corresponding map marker
  - Clicking a map marker highlights the corresponding table row
- Map automatically pans/zooms to the selected project location

---

## State Management
- Implemented using React local state (`useState`, `useMemo`)
- No Redux or external state libraries
- Clear separation of concerns:
  - Data fetching & processing → custom hook
  - UI rendering → presentational components

---

## Performance Considerations
- Client-side pagination to avoid rendering large datasets at once
- Memoized sorting and filtering to reduce unnecessary re-renders
- Lightweight map rendering for smooth interaction

---

## Design Decisions
- **Status-based filtering** was chosen as it is the most meaningful categorical attribute for quick data exploration
- Leaflet selected for map rendering due to its simplicity and performance
- Custom CSS used to maintain full control over layout and styling without additional UI libraries

---

## Running the Project Locally

```bash
npm install
npm run dev
Screenshots
Dashboard View
https://raw.githubusercontent.com/KhushiBelekar/geo-data-dashboard/main/screenshots/dashboard-ui.png

Map View
https://raw.githubusercontent.com/KhushiBelekar/geo-data-dashboard/main/screenshots/map-view.png

Repository Structure
https://raw.githubusercontent.com/KhushiBelekar/geo-data-dashboard/main/screenshots/github-repo.png

Time Spent
Total time spent on this assignment: ~ 13 hours

Technical Decisions
Used Vite + React for fast development

Used React Leaflet for map visualization

Used functional components and hooks only

Local state used for simplicity

Performance
Client-side pagination to handle large datasets

Optimized rendering to support 5k+ rows

Map & UI Synchronization
Table row click highlights map marker

Map marker click highlights table row

Component Decomposition
Dashboard: layout and shared state

DataTable: table UI and pagination

MapView: map and markers

useProjects: data logic