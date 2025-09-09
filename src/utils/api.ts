import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";

const api = axios.create({
  baseURL: BASE_URL,
});

// fetch all countries
export const fetchCountries = async () => {
  const response = await api.get("/all?fields=name,flags,region,cca3");
  return response.data;
};

//detail fetch
export const fetchCountryByCode = async (code: string) => {
  const response = await api.get(
    `/alpha/${code}?fields=name,flags,region,subregion,capital,population,currencies,languages,borders,cca3`
  );
  return response.data;
};
