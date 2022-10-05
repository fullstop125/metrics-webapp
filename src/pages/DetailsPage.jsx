import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDataBySymbol } from '../redux/companies/companies';

const DetailsPage = () => {
  const { companyDataBySymbol } = useSelector((state) => state.companies);
  const dispatch = useDispatch();
  const { smbl } = useParams();
  useEffect(() => {
    dispatch(fetchDataBySymbol(smbl));
  }, []);
  console.log(smbl);

  console.log(companyDataBySymbol);
  return (
    <>
      <div className='head'>
        <div>
          <img
            src={companyDataBySymbol.image}
            alt='logo'
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        </div>
        <div>
          <h3 >{companyDataBySymbol.companyName}</h3>
          <span>({companyDataBySymbol.symbol})</span>
        </div>
      </div>
      <div className='list'>
        <h3 >Company Symbol</h3>
        <p>{companyDataBySymbol.symbol}</p>
      </div>
      <div className='list'>
        <h3>Company Exchange</h3>
        <p>{companyDataBySymbol.exchange}</p>
      </div>
      <div className='list'>
        <h3>Company Industry</h3>
        <p>{companyDataBySymbol.industry}</p>
      </div>
      <div className='list'>
        <h3>Company Website</h3>
        <p>{companyDataBySymbol.website}</p>
      </div>
      <div className='list'>
        <h3>Company CEO</h3>
        <p>{companyDataBySymbol.ceo}</p>
      </div>
      <div className='list'>
        <h3>Company Address</h3>
        <p>{companyDataBySymbol.address}</p>
      </div>
      <div className='list'>
        <h3>Company City</h3>
        <p>{companyDataBySymbol.city}</p>
      </div>
    </>
  );
};

export default DetailsPage;


