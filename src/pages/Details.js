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

      {details && (
      <Chart
        title1={details.name}
        title2={details.symbol}
        count={`${parseFloat(details.changePercent24Hr || 0).toFixed(8)} %`}
      />
      )}
      <h4 className="coins-abt">Coin Description</h4>
      {details && (
      <ul className="details-abt">
        <li className="details-color-1">
          <span>Name :</span>
          <span>{details.name}</span>
        </li>
        <li className="details-color-2">
          <span>Symbol :</span>
          <span>{details.symbol}</span>
        </li>
        <li className="details-color-1">
          <span>Rank :</span>
          <span>{details.rank}</span>
        </li>
        <li className="details-color-2">
          <span>Supply :</span>
          <span>{details.supply}</span>
        </li>
        <li className="details-color-1">
          <span>Market Capital(USD) :</span>
          <span>{details.marketCapUsd}</span>
        </li>
        <li className="details-color-2">
          <span>Volume(USD) 24Hrs :</span>
          <span>{details.volumeUsd24Hr}</span>
        </li>
        <li className="details-color-1">
          <span>Price(USD) :</span>
          <span>{details.priceUsd}</span>
        </li>
        <li className="details-color-2">
          <span>Change Percent(24Hr) :</span>
          <span>{details.changePercent24Hr}</span>
        </li>
        <li className="details-color-1">
          <span>VWAP(24Hr) :</span>
          <span>{details.vwap24Hr}</span>
        </li>
      </ul>
      )}
    </div>
  );
};

export default Details;
