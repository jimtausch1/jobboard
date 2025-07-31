import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../lib/formatters";

interface JobItemProp {
  job: Job;
}

interface JobListProp {
  jobs: Jobs;
}

interface CompanyJobListProp {
  jobs: Job[];
}

export function JobList({ jobs }: JobListProp) {
  return (
    <ul className="box">
      {jobs && jobs.items.map((job: Job) => <JobItem key={job.id} job={job} />)}
    </ul>
  );
}

export function CompanyJobList({ jobs }: CompanyJobListProp) {
  return (
    <ul className="box">
      {jobs && jobs.map((job: Job) => <JobItem key={job.id} job={job} />)}
    </ul>
  );
}

function JobItem({ job }: JobItemProp) {
  const title = job.company ? `${job.title} at ${job.company.name}` : job.title;
  return (
    <li className="media">
      <div className="media-left has-text-grey">{formatDate(job.date)}</div>
      <div className="media-content">
        <Link to={`/jobs/${job.id}`}>{title}</Link>
      </div>
    </li>
  );
}
