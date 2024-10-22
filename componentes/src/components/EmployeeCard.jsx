import React from "react";

function EmployeeCard({ fullName, job, email}) {
  return (
    <div>
      <h2>{fullName}</h2>
      <dl>
        <dt>job:</dt>
        <dd>{job}</dd>
      </dl>
      <dl>
        <dt>email:</dt>
        <dd>{email}</dd>
      </dl>
    </div>
  );
}

export default EmployeeCard;
