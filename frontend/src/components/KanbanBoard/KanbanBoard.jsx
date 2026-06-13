const STATUSES = ["Applied", "Interview", "Offer", "Rejected"];

const statusColors = {
  Applied: "bg-blue-50 text-blue-700 border-blue-100",
  Interview: "bg-amber-50 text-amber-700 border-amber-100",
  Offer: "bg-green-50 text-green-700 border-green-100",
  Rejected: "bg-red-50 text-red-700 border-red-100",
};

const KanbanBoard = ({ jobs, onDelete, onStatusChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {STATUSES.map((status) => (
        <div
          key={status}
          className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm"
        >
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold text-gray-700 text-sm">
              {status}
            </span>
            <span
              className={`text-xs px-2 py-1 rounded-full border font-medium ${statusColors[status]}`}
            >
              {jobs.filter((j) => j.status === status).length}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            {jobs
              .filter((job) => job.status === status)
              .map((job) => (
                <div
                  key={job._id}
                  className="border border-gray-100 rounded-xl p-3 hover:shadow-sm transition-all"
                >
                  <p className="font-semibold text-gray-800 text-sm">
                    {job.company}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{job.role}</p>
                  <p className="text-xs text-blue-500 mt-1">
                    via {job.platform}
                  </p>
                  {job.notes && (
                    <p className="text-xs text-gray-400 mt-1 italic">
                      📝 {job.notes}
                    </p>
                  )}
                  <div className="flex gap-2 mt-3">
                    <select
                      value={job.status}
                      onChange={(e) => onStatusChange(job._id, e.target.value)}
                      className="text-xs border border-gray-200 rounded-lg px-2 py-1 flex-1 focus:outline-none"
                    >
                      {STATUSES.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                    <button
                      onClick={() => onDelete(job._id)}
                      className="text-xs px-2 py-1 border border-red-100 text-red-500 rounded-lg hover:bg-red-50 transition-all"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            {jobs.filter((j) => j.status === status).length === 0 && (
              <p className="text-xs text-gray-400 text-center py-4">
                No applications
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
