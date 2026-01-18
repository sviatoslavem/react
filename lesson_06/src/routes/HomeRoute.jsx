import React from "react";
import ErrorBoundary from "../error-boundary/ErrorBoundary";
import CountryList from "../components/Country/CountryList";
import CountryFilter from "../components/Country/CountryFilter";
const HomeRoute = () => {
  return (
    <>
      <h1>Home Route</h1>
      <ErrorBoundary>
        <CountryFilter />
        <CountryList />
      </ErrorBoundary>
    </>
  );
};

export default HomeRoute;
