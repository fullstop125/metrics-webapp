import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowCircleRight } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../redux/companies/companies';

const Companies = () => {
  const navigate = useNavigate();
  const { companiesData } = useSelector((state) => state.companies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <div className="container">
        <h3>Industrial Average</h3>
      </div>
      <div className="bg-pink">
        <h3 className="company-name">Companies Name</h3>
        <div className="row">
          {companiesData.map((company) => (
            <div
              key={uuidv4()}
              className="card"
              onClick={() => navigate(`/details/${company.symbol}`)}
              aria-hidden="true"
            >
              <FaArrowCircleRight className="icon-arrow" />
              <ul className="lists">
                <li>
                  {company.name}
                  <span>
                    (
                    {company.symbol}
                    )
                  </span>
                </li>
                <li>{company.headQuarter}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Companies;
