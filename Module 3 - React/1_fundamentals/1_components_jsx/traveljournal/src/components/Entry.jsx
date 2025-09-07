import location from "../assets/marker.png";

const Entry = () => {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img
          className="main-image"
          src="https://scrimba.com/links/travel-journal-japan-image-url"
          alt="Mount Fuji"
        />
      </div>
      <div className="info-container">
        <div className="top-info">
          <div>
            <img className="marker" src={location} alt="map marker icon" />
            <span className="country">Japan</span>
          </div>
          <a href="https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9" target="_blank">
            View on Google Maps
          </a>
        </div>
        <h2 className="entry-title">Mount Fuji</h2>
        <p className="trip-dates">12 Jan, 2021 - 24 Jan, 2021</p>
        <p className="entry-text">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </article>
  );
};

export default Entry;
