import { useEffect, useState } from "react";
import data from "../data/projects.json";

export function useProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate API delay
    setTimeout(() => {
      setProjects(data);
    }, 500);
  }, []);

  return { projects };
}
