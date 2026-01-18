import React, { useState } from "react";
import { useLoaderData, Link, useSearchParams } from "react-router";
import { REGIONS } from "../../constants/constants";
const CountryList = () => {
  const initialCountry = useLoaderData();
  const [country, setCountry] = useState(initialCountry);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get(`filter`);

  const filteredList = country.filter((item) => {
    if (!filter || filter === REGIONS.ALL) return true;
    return item.region === filter;
  });
  return filteredList
    ? filteredList.map((item, index) => (
        <li key={index}>
          <Link to={`/country/${item.cca2}`}>
            {item.flag} {item.name.official}
          </Link>
        </li>
      ))
    : null;
};

export default CountryList;
