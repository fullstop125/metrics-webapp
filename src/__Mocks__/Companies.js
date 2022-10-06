import React from 'react';

const Companies = () => (
  <>
    <div className="search">
      <input
        className=" search-input"
        type="text"
        onChange={(e) => e.target.value}
        placeholder="Search Company"
      />
      <select className="drop-down" onChange={(e) => e.target.value}>
        <option value="">Select Company</option>

        <option>name</option>
      </select>
    </div>
    <div className="container">
      <h3>Industrial Average</h3>
    </div>
    <div className="bg-pink">
      <h3 className="company-name">Companies Name</h3>
      <div className="row">
        companiesData
        <div className="card" aria-hidden="true">
          <ul className="lists">
            <li>
              name
              <span>symbol</span>
            </li>
            <li>headQuarter</li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

export default Companies;
