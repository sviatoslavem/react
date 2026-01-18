import React from "react";
import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <h1>Oops!</h1>
      <p>{error.message}</p>
    </>
  );
};

export default ErrorPage;
