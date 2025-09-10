import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCountryByCode } from "../utils/api";

interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    svg: string;
  };
  capital?: string[];
  region: string;
  subregion: string;
  population: number;
  currencies: Record<string, { name: string }>;
  languages: Record<string, string>;
}

const CountryDetails = () => {
  const { code } = useParams();

  const { data, isLoading, isError, error } = useQuery<Country>({
    queryKey: ["country", code],
    queryFn: () => fetchCountryByCode(code!),
    enabled: !!code,
  });

  if (isLoading) {
    return (
      <div className="country-details loading">
        <div className="spinner"></div>
        <p>Loading country details...</p>
      </div>
    );
  }

  if (isError) {
    return <p className="country-details error">{(error as Error).message}</p>;
  }

  if (!data) {
    return <p className="country-details not-found">Country not found</p>;
  }

  return (
    <div className="country-details">
      <img src={data.flags.png} alt={data.name.common} className="flag" />
      <h2>{data.name.common}</h2>
      <p>Official Name: {data.name.official}</p>
      <p>Capital: {data.capital?.[0]}</p>
      <p>Region: {data.region}</p>
      <p>Subregion: {data.subregion}</p>
      <p>Population: {data.population.toLocaleString()}</p>
      <p>
        Currencies:{" "}
        {Object.values(data.currencies)
          .map((c) => c.name)
          .join(", ")}
      </p>
      <p>Languages: {Object.values(data.languages).join(", ")}</p>
    </div>
  );
};

export default CountryDetails;
