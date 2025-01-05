import React from "react";
import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = useLoaderData();

  return (
    <div className="min-h-[70vh] flex justify-center items-center overflow-hidden">
      <div className="card card-compact bg-base-100 w-[50%] shadow-xl">
        
          <figure>
            <img className="w-16" src={company_logo} alt="Jobs" />
          </figure>
          <div>
            <h4 className="text-2xl font-bold text-center">{company}</h4>
            <p className="flex gap-1 items-center justify-center">
              {" "}
              <FaMapMarkerAlt /> {location}
            </p>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description}</p>
          <div className="flex gap-2 flex-wrap">
            {requirements.map((skill, index) => (
              <p
                key={index}
                className="border rounded-md text-center px-2 hover:text-purple-700 hover:bg-blue-200"
              >
                {skill}
              </p>
            ))}
          </div>
          <div className="card-actions justify-end items-center mt-4">
            <p className="flex items-center">
              {" "}
              salary: <FaDollarSign /> {salaryRange.min} - {salaryRange.max}{" "}
              {salaryRange.currency}
            </p>
            <Link to={`/jobApply/${_id}`}>
              <button className="btn btn-primary">Apply</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
