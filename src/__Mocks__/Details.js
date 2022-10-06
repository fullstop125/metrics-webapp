import React from 'react';

const DetailsPage = () => (
  <>
    <div className="head">
      <div>
        <img
          src="image"
          alt="logo"
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
      </div>
      <div>
        <h3>companyName</h3>
        <span>symbol</span>
      </div>
    </div>
    <div className="list">
      <h3>Company Symbol</h3>
      <p>symbol</p>
    </div>
    <div className="list">
      <h3>Company Exchange</h3>
      <p>exchange</p>
    </div>
    <div className="list">
      <h3>Company Industry</h3>
      <p>industry</p>
    </div>
    <div className="list">
      <h3>Company Website</h3>
      <p>website</p>
    </div>
    <div className="list">
      <h3>Company CEO</h3>
      <p>ceo</p>
    </div>
    <div className="list">
      <h3>Company Address</h3>
      <p>address</p>
    </div>
    <div className="list">
      <h3>Company City</h3>
      <p>city</p>
    </div>
  </>
);

export default DetailsPage;
