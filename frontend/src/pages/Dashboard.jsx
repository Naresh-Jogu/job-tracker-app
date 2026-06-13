import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar/Navbar";
import StatsCards from "../components/StatsCards/StatsCards";
import AddJobForm from "../components/AddJobForm/AddJobForm";
import KanbanBoard from "../components/KanbanBoard/KanbanBoard";

const API_URL = "http://localhost:3000/api";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const { token } = useAuth();

  const fecthJobs = async () => {
    const res = await fetch(`${API_URL}/jobs`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setJobs(data);
  };

  useEffect(() => {
    fecthJobs();
  }, []);

  const handleAddJob = async (jobData) => {
    console.log("Adding job:", jobData)
    const res = await fetch(`${API_URL}/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(jobData),
    });
    const newJob = await res.json();
    setJobs([...jobs, newJob]);
  };

  const handleDelete = async (id) => {
    await fetch(`${API_URL}/jobs/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    setJobs(jobs.filter((job) => job._id !== id));
  };

  const handleStatusChange = async (id, newStatus) => {
    const res = await fetch(`${API_URL}/jobs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status: newStatus }),
    });

    const updated = await res.json();
    setJobs(jobs.map((job) => (job._id === id ? updated : job)));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          My Job Applications
        </h1>
        <StatsCards jobs={jobs} />
        <AddJobForm onAddJob={handleAddJob} />
        <KanbanBoard
          jobs={jobs}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
        />
      </div>
    </div>
  );
};

export default Dashboard;
