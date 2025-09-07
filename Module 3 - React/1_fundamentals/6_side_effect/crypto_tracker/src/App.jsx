import { useEffect, useState } from "react";
import { FaTrash, FaCheck } from "react-icons/fa";
import "./App.css";
import CryptoCard from "./components/CryptoCard";

export default function App() {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshTime, setRefreshTime] = useState(10);

  const fetchCryptoPrices = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "/api/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=6&page=1&sparkline=false"
      );
      const data = await response.json();
      setCryptos(data);
      setLoading(false);
    } catch (err) {
      console.log("Failed to fetch crypto data:", err);
      setError("Failed to fetch crypto data!");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptoPrices();
    const interval = setInterval(fetchCryptoPrices, refreshTime * 1000);

    // Cleanup interval when unmounted or refreshTime changes
    return () => clearInterval(interval);
  }, [refreshTime]);

  useEffect(() => {
    if (cryptos.length > 0) {
      document.title = `Top Crypto: ${cryptos[0].name} - ₹${cryptos[0].current_price}`;
    }
  }, [cryptos]);

  return (
    <div className="app">
      <div className="header">
        <h1>Crypto Price Tracker 💹</h1>
        <div className="refresh-control">
          <label>Auto-refresh every: </label>
          <select
            value={refreshTime}
            onChange={(e) => setRefreshTime(Number(e.target.value))}
          >
            <option value={5}>5 sec</option>
            <option value={10}>10 sec</option>
            <option value={30}>30 sec</option>
          </select>
        </div>
      </div>

      {loading && <p className="loading">⏳ Loading crypto prices...</p>}
      {error && <p className="error">{error}</p>}

      <div className="crypto-list">
        {cryptos.map((coin) => (
          <CryptoCard key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
}
