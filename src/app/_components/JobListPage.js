import { useCallback, useState, useEffect } from "react";

export default function JobSearch() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("dehradun");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);

  const cities = [
    "dehradun",
    "delhi",
    "mumbai",
    "bangalore",
    "hyderabad",
    "chennai",
    "pune",
    "kolkata",
    "jaipur",
  ];

  const fetchJobs = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://jsearch.p.rapidapi.com/search?query=${
          searchTerm || "jobs"
        }%20in%20${city}&page=1&num_pages=1&employment_types=FULLTIME`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "1bdd6ee0b5msh3347fb57232f909p11164ejsn182e9f862d74",
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
          },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch jobs");

      const data = await response.json();
      setJobs(data.data || []);
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [city, searchTerm]); // Important: dependencies used inside fetchJobs

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🇮🇳 India Job Search
      </h1>

      {/* Search Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white p-4 rounded-lg shadow">
        <input
          type="text"
          placeholder="Search by job title, skills or company..."
          className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && fetchJobs()}
        />

        <select
          className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          {cities.map((city) => (
            <option key={city} value={city}>
              {city.charAt(0).toUpperCase() + city.slice(1)}
            </option>
          ))}
        </select>

        <button
          className="btn btn-primary px-6 py-3 rounded-lg text-white font-semibold transition-colors duration-200 hover:bg-blue-600 ms-3"
          onClick={fetchJobs}
          disabled={loading}
        >
          {loading ? "Searching..." : "Search Jobs"}
        </button>
      </div>

      {/* Status Messages */}
      {loading && (
        <div className="text-center my-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mb-2"></div>
          <p>Loading job listings...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
          <p>Error: {error}</p>
          <button
            onClick={fetchJobs}
            className="mt-2 text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Retry
          </button>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Job Listings */}
        <div className="lg:w-2/3">
          {!loading && jobs.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No jobs found</h3>
              <p className="text-gray-600">
                Try adjusting your search criteria
              </p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {jobs.map((job) => (
                <div
                  key={job.job_id}
                  className={`border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer ${
                    selectedJob?.job_id === job.job_id
                      ? "ring-2 ring-blue-500"
                      : ""
                  }`}
                  onClick={() => fetchJobDetails(job.job_id)}
                >
                  <h2 className="font-bold text-lg mb-1 truncate">
                    {job.job_title || "Job Title Not Available"}
                  </h2>
                  <p className="text-gray-600 mb-2">
                    {job.employer_name || "Company Not Specified"}
                  </p>

                  <div className="flex items-center gap-2 text-sm mb-2">
                    <span>
                      📍{" "}
                      {job.job_city ||
                        city.charAt(0).toUpperCase() + city.slice(1)}
                    </span>
                    {job.job_is_remote && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                        Remote
                      </span>
                    )}
                  </div>

                  {job.job_min_salary && (
                    <p className="text-sm mb-2">
                      💰 {job.job_min_salary} - {job.job_max_salary}{" "}
                      {job.job_salary_currency}
                    </p>
                  )}

                  <p className="text-xs text-gray-500 mb-3">
                    {job.job_posted_at_timestamp
                      ? `Posted ${new Date(
                          job.job_posted_at_timestamp * 1000
                        ).toLocaleDateString()}`
                      : "Posted date not available"}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Job Details Panel */}
        <div className="w-100 mt-3">
          {selectedJob ? (
            <div className="sticky p-3 top-4 bg-white p-6 rounded-lg shadow-lg border">
          <div className="d-flex">
                <h2 className="text-2xl font-bold mb-2">
                {selectedJob.job_title}
              </h2>
              <h6 className="text-lg mt-3 ms-3 text-gray-700 mb-4">
                {selectedJob.employer_name}
              </h6>
          </div>
              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p>
                          {selectedJob.job_city ||
                            city.charAt(0).toUpperCase() + city.slice(1)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Job Type</p>
                        <p>{selectedJob.job_employment_type || "Full-time"}</p>
                      </div>
                      {selectedJob.job_min_salary && (
                        <>
                          <div>
                            <p className="text-sm text-gray-500">
                              Salary Range
                            </p>
                            <p>
                              {selectedJob.job_min_salary} -{" "}
                              {selectedJob.job_max_salary}{" "}
                              {selectedJob.job_salary_currency}
                            </p>
                          </div>
                        </>
                      )}
                      <div>
                        <p className="text-sm text-gray-500">Posted</p>
                        <p>
                          {selectedJob.job_posted_at_timestamp
                            ? new Date(
                                selectedJob.job_posted_at_timestamp * 1000
                              ).toLocaleDateString()
                            : "Not specified"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Job Description</h3>
                      <div
                        className="prose max-w-none"
                        dangerouslySetInnerHTML={{
                          __html:
                            selectedJob.job_description ||
                            "No description provided",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {selectedJob.job_apply_link && (
                <a
                  href={selectedJob.job_apply_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  Apply Now
                </a>
              )}
            </div>
          ) : (
            <div className="bg-gray-50 p-6 rounded-lg border text-center">
              <p className="text-gray-500">Select a job to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
