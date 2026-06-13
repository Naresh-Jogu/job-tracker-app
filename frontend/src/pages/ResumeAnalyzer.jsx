import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useAuth } from "../context/AuthContext";
import ReactMarkdown from "react-markdown";

const ResumeAnalyzer = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [resume, setResume] = useState("");
  const { token } = useAuth();

  const handleAnalyze = async () => {
    if (!resume || !jobDescription) return alert("Please fill both fields!");

    setLoading(true);
    setFeedback("");

    const res = await fetch("http://localhost:3000/api/ai/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ resume, jobDescription }),
    });

    const data = await res.json();
    setFeedback(data.feedback);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          AI Resume Analyzer
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Paste your resume and job description to get AI-powered feedback
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className=" flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              Your Resume
            </label>
            <textarea
              value={resume}
              rows={12}
              onChange={(e) => setResume(e.target.value)}
              placeholder="Paste your resume text here..."
              className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 resize-none"
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              Job Description
            </label>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here..."
              rows={12}
              className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 resize-none"
            />
          </div>
        </div>
        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "Analyze with AI ✨"}
        </button>
        {feedback && (
          <div className="mt-8 border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              AI Feedback
            </h2>
            <div className="prose prose-sm max-w-none text-gray-700">
              <ReactMarkdown>{feedback}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeAnalyzer;
