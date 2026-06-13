import React from "react";

const StatsCards = ({ jobs }) => {
  const total = jobs.length;
  const interviews = jobs.filter((job) => job.status === "Interview").length;
  const offers = jobs.filter((job) => job.status === "Offer").length;
  const rejected = jobs.filter((job) => job.status === "Rejected").length;

  const stats = [
    {
      label: "Total Applied",
      count: total,
      color: "bg-blue-50 text-blue-700 border-blue-100",
    },
    {
      label: "Interviews",
      count: interviews,
      color: "bg-amber-50 text-amber-700 border-amber-100",
    },
    {
      label: "Offers",
      count: offers,
      color: "bg-green-50 text-green-700 border-green-100",
    },
    {
      label: "Rejected",
      count: rejected,
      color: "bg-red-50 text-red-700 border-red-100",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={` border rounded-xl p-4 ${stat.color}`}
        >
          <p className="text-sm font-medium opacity-75">{stat.label}</p>
          <p className="text-3xl font-bold mt-1">{stat.count}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
