import location from "../assets/marker.png";

const Entry = ({ image, locationHref, title, dates, description, country }) => {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img className="main-image" src={image} alt={title} />
      </div>
      <div className="info-container">
        <div className="top-info">
          <div>
            <img className="marker" src={location} alt="map marker icon" />
            <span className="country">{country}</span>
          </div>
          <a href={locationHref} target="_blank">
            View on Google Maps
          </a>
        </div>
        <h2 className="entry-title">{title}</h2>
        <p className="trip-dates">{dates}</p>
        <p className="entry-text">{description}</p>
      </div>
    </article>
  );
};

export default Entry;
