import React from 'react';
import '../styles/Chart.css';
import PropTypes from 'prop-types';
import chart from '../assets/chart.png';

const Chart = ({ title1, title2, count }) => (
  <div className="content">
    <div className="image-ch"><img src={chart} alt="chart" /></div>
    <div className="text-ch">
      <h2>
        {title1}
        <br />
        {title2}
      </h2>
      <p>{count}</p>
    </div>
  </div>
);

Chart.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  count: PropTypes.string.isRequired,
};
Chart.defaultProps = {
  title1: null,
  title2: null,
};
export default Chart;
