import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Coin from '../components/Coin';
import Header from '../components/Header';
import Chart from '../components/Chart';
import { FetchCoinsFunc } from '../redux/List/List';
import '../styles/Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const coins = useSelector((state) => state.ListsReducer);
  useEffect(() => {
    dispatch(FetchCoinsFunc());
  }, [dispatch]);

  const [search, setSearch] = useSearchParams();

  const handleDetails = (id) => navigate(`/details/${id}`);
  return (
    <div data-testid="intro-page" className="data-1">
      <Header path="/" />
      <input
        className="coins-abt"
        type="text"
        value={search.get('filter') || ''}
        placeholder="Search by Crypto name  eg : BNB"
        onChange={(e) => {
          const filter = e.target.value;
          if (filter) {
            setSearch({ filter });
          } else {
            setSearch({});
          }
        }}
      />
      <Chart title1="Crypto" title2="Currencies" count={`${coins.length} Coins`} />

      <div>

        <div className="coin-card-1">
          {coins
            .filter((coin) => {
              const filter = search.get('filter');
              if (!filter) return true;
              const name = coin.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((coin) => (
              <Coin
                key={coin.id}
                name={coin.name}
                symbol={coin.symbol}
                id={coin.id}
                price={coin.priceUsd}
                handleDetails={handleDetails}
              />
            ))}
        </div>
      </div>
    </div>

  );
};

export default Home;
