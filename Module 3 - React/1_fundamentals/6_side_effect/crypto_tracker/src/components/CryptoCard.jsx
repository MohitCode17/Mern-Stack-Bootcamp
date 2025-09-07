import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const CryptoCard = ({ coin }) => {
  return (
    <div className="crypto-card">
      <img src={coin.image} alt={coin.name} />
      <h2>{coin.name}</h2>
      <p className="price">₹{coin.current_price.toLocaleString()}</p>
      <p
        className={`change ${
          coin.price_change_percentage_24h > 0 ? "up" : "down"
        }`}
      >
        {coin.price_change_percentage_24h > 0 ? <FaArrowUp /> : <FaArrowDown />}
        {coin.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>
  );
};

export default CryptoCard;
