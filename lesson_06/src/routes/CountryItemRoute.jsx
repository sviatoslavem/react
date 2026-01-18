import React from "react";
import { useParams } from "react-router";
import ErrorBoundary from "../error-boundary/ErrorBoundary";
import CountryItemList from "../components/Country/CountryItemList";
import NavigateButton from "../components/NavigateButton/NavigateButton";
const CountryItemRoute = () => {
  const { id } = useParams();

  return (
    <>
      <h1>CountryItem #{id} Route</h1>
      <ErrorBoundary>
        <NavigateButton title={"Back to countries list"} path="/" />
        <CountryItemList />
      </ErrorBoundary>
    </>
  );
};

export default CountryItemRoute;
