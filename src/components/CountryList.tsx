import { Link } from "react-router-dom";
import { useCountries } from "../hooks/UseCountries";
import "../styles/CountryList.scss";

interface Country {
  cca3: string;
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    svg: string;
  };
  region: string;
  capital?: string[];
  population?: number;
}

const CountryList = () => {
  const { data: countries, isLoading, isError, error } = useCountries();

  if (isLoading)
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p className="loading-text">Loading countries...</p>
      </div>
    );

  if (isError)
    return <p className="error-message">{(error as Error).message}</p>;

  return (
    <div className="country-grid">
      {countries?.map((country: Country) => (
        <Link
          key={country.cca3}
          to={`/country/${country.cca3}`}
          className="country-card"
        >
          <img
            src={country.flags.png}
            alt={country.name.common}
            className="country-flag"
          />
          <p className="country-name">{country.name.common}</p>
          <p className="country-region">{country.region}</p>
        </Link>
      ))}
    </div>
  );
};

export default CountryList;
