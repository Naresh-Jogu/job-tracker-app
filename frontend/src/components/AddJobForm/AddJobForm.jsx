import { useState } from "react";

const AddJobForm = ({ onAddJob }) => {
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("Applied");
  const [role, setRole] = useState("");
  const [platform, setPlatform] = useState("Linkedin");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!company || !role) return alert("Company and Role are rquired!");

    await onAddJob({ company, role, status, platform, notes });

    setCompany("");
    setRole("");
    setStatus("Applied");
    setPlatform("Linkedin");
    setNotes("");
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-8 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Add New Application
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">Company</label>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="e.g. Google"
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">Role</label>
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="e.g. Frontend Developer"
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border - border-gray-200 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-blue-400"
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">Platform</label>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="border - border-gray-200 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-blue-400"
          >
            <option>LinkedIn</option>
            <option>Naukri</option>
            <option>Internshala</option>
            <option>Wellfound</option>
            <option>Company Website</option>
            <option>Other</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">Notes</label>
          <input
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any notes..."
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all"
          >
            + Add Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJobForm;
