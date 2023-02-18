import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FetchDetailsFunc } from '../redux/Details/Details';
import Header from '../components/Header';
import Chart from '../components/Chart';
import '../styles/Details.css';

const Details = () => {
  const { coinId } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.DetailsReducer);
  useEffect(() => {
    dispatch(FetchDetailsFunc(coinId));
  }, [coinId, dispatch]);
  return (
    <div className="data-1">
      <Header path="details" />
      <h4 className="coins-abt">Coin Description</h4>
      {details && (
      <Chart
        title1={details.name}
        title2={details.symbol}
        count={`${parseFloat(details.changePercent24Hr || 0).toFixed(8)} %`}
      />
      )}
      {details && (
      <ul className="details-abt">
        <li className="details-color-1">
          <span>Name :</span>
          <span>{details.name}</span>
          <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 48C16 30.36 30.36 16 48 16C65.64 16 80 30.36 80 48C80 65.64 65.64 80 48 80C30.36 80 16 65.64 16 48ZM8 48C8 70.08 25.92 88 48 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 48 8C25.92 8 8 25.92 8 48ZM48 44H32V52H48V64L64 48L48 32V44Z" fill="white" />
          </svg>
        </li>
        <li className="details-color-2">
          <span>Symbol :</span>
          <span>{details.symbol}</span>
          <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 48C16 30.36 30.36 16 48 16C65.64 16 80 30.36 80 48C80 65.64 65.64 80 48 80C30.36 80 16 65.64 16 48ZM8 48C8 70.08 25.92 88 48 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 48 8C25.92 8 8 25.92 8 48ZM48 44H32V52H48V64L64 48L48 32V44Z" fill="white" />
          </svg>
        </li>
        <li className="details-color-1">
          <span>Rank :</span>
          <span>{details.rank}</span>
          <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 48C16 30.36 30.36 16 48 16C65.64 16 80 30.36 80 48C80 65.64 65.64 80 48 80C30.36 80 16 65.64 16 48ZM8 48C8 70.08 25.92 88 48 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 48 8C25.92 8 8 25.92 8 48ZM48 44H32V52H48V64L64 48L48 32V44Z" fill="white" />
          </svg>
        </li>
        <li className="details-color-2 details-svg">
          <span>Supply :</span>
          <span>{details.supply}</span>
          <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 48C16 30.36 30.36 16 48 16C65.64 16 80 30.36 80 48C80 65.64 65.64 80 48 80C30.36 80 16 65.64 16 48ZM8 48C8 70.08 25.92 88 48 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 48 8C25.92 8 8 25.92 8 48ZM48 44H32V52H48V64L64 48L48 32V44Z" fill="white" />
          </svg>
        </li>
        <li className="details-color-1 details-svg">
          <span>Market Capital(USD) :</span>
          <span>{details.marketCapUsd}</span>
          <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 48C16 30.36 30.36 16 48 16C65.64 16 80 30.36 80 48C80 65.64 65.64 80 48 80C30.36 80 16 65.64 16 48ZM8 48C8 70.08 25.92 88 48 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 48 8C25.92 8 8 25.92 8 48ZM48 44H32V52H48V64L64 48L48 32V44Z" fill="white" />
          </svg>
        </li>
        <li className="details-color-2 details-svg">
          <span>Volume(USD) 24Hrs :</span>
          <span>{details.volumeUsd24Hr}</span>
          <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 48C16 30.36 30.36 16 48 16C65.64 16 80 30.36 80 48C80 65.64 65.64 80 48 80C30.36 80 16 65.64 16 48ZM8 48C8 70.08 25.92 88 48 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 48 8C25.92 8 8 25.92 8 48ZM48 44H32V52H48V64L64 48L48 32V44Z" fill="white" />
          </svg>
        </li>
        <li className="details-color-1 details-svg">
          <span>Price(USD) :</span>
          <span>{details.priceUsd}</span>
          <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 48C16 30.36 30.36 16 48 16C65.64 16 80 30.36 80 48C80 65.64 65.64 80 48 80C30.36 80 16 65.64 16 48ZM8 48C8 70.08 25.92 88 48 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 48 8C25.92 8 8 25.92 8 48ZM48 44H32V52H48V64L64 48L48 32V44Z" fill="white" />
          </svg>
        </li>
        <li className="details-color-2 details-svg">
          <span>Change Percent(24Hr) :</span>
          <span>{details.changePercent24Hr}</span>
          <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 48C16 30.36 30.36 16 48 16C65.64 16 80 30.36 80 48C80 65.64 65.64 80 48 80C30.36 80 16 65.64 16 48ZM8 48C8 70.08 25.92 88 48 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 48 8C25.92 8 8 25.92 8 48ZM48 44H32V52H48V64L64 48L48 32V44Z" fill="white" />
          </svg>
        </li>
        <li className="details-color-1 details-svg">
          <span>VWAP(24Hr) :</span>
          <span>{details.vwap24Hr}</span>
          <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 48C16 30.36 30.36 16 48 16C65.64 16 80 30.36 80 48C80 65.64 65.64 80 48 80C30.36 80 16 65.64 16 48ZM8 48C8 70.08 25.92 88 48 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 48 8C25.92 8 8 25.92 8 48ZM48 44H32V52H48V64L64 48L48 32V44Z" fill="white" />
          </svg>
        </li>
      </ul>
      )}
    </div>
  );
};

export default Details;
